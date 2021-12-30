import json
import os, io
from pathlib import Path
from pdf2image import convert_from_bytes
import boto3
import PIL
import requests
import uuid

# FROM https://qiita.com/yosiiii/items/bb7c6793b2bdd2029b95

HASURA_URL = "https://adequate-guinea-56.hasura.app/v1/graphql"


def lambda_handler(event, context):
    print("start lambda")
    body = json.loads(event["body"])
    headers = event["headers"]
    print(event)
    print(headers)
    input = body["input"]
    print(input)
    slideId = input["slideId"]
    original_pdf_key = (
        "public/" + input["pdfName"]
    )  # amplifyが勝手にpublicをつけてkeyでそれを返してくれない
    # queryStringParamtersはAPI Gateway用
    bucket_name = "slidesharefb3e5b28443a4cada2800e8b4b2e9012235535-dev"
    print(f"Bucket: {bucket_name}`, `Key: ${original_pdf_key}")

    s3 = boto3.client("s3")
    response = s3.get_object(Bucket=bucket_name, Key=original_pdf_key)
    data = response["Body"].read()

    print("convert from bytes start")
    pages = convert_from_bytes(data)
    print("convert from bytes end")

    # pagesはPILのImageリストなのでbyteに変換
    index = 0
    for page in pages:
        img_bytes = io.BytesIO()
        page.save(img_bytes, format="PNG")
        img_bytes = img_bytes.getvalue()

        base = os.path.splitext(os.path.basename(original_pdf_key))[0]
        directory = "generated"  # amplifyが勝手にpublicつけるからここではつけない。。
        key = f"{directory}/{base}/{index}.png"
        s3.put_object(
            Body=img_bytes, Bucket=bucket_name, Key="public/" + key
        )  # amplifyはpublicしか読めないからpublicつける・・・

        # APIコールでスライドページを作る
        insertPageMutation = """
            mutation InsertPage($object: slideshare_Page_insert_input!) {
                insert_slideshare_Page_one(object: $object) {
                    id
                    pageNumber
                    imageUrl
                    isVisible
                    slideId
                    text
                    type
                    videoUrl
                }
            }
        """
        graphqlReq = {
            "query": insertPageMutation,
            "variables": {
                "object": {
                    "id": str(uuid.uuid4()),
                    "slideId": slideId,
                    "type": "image",
                    "imageUrl": key,
                    "pageNumber": index,
                }
            },
        }
        print("request")
        print(graphqlReq)
        res = requests.post(
            url=HASURA_URL,
            json=graphqlReq,
            headers={"Authorization": headers["Authorization"]},
        )
        print("response")
        print(res.text)
        index += 1
    print("process end")
    return {"statusCode": 200, "body": json.dumps({"slideId": slideId})}
