import json
import os, io
from pathlib import Path
from pdf2image import convert_from_bytes
import boto3
import PIL
import requests

# FROM https://qiita.com/yosiiii/items/bb7c6793b2bdd2029b95


def lambda_handler(event, context):
    print("start lambda")
    body = json.loads(event["body"])
    print(body)
    input = body["input"]
    print(input)
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
    keys = []
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
        keys.append(key)
        index += 1
    return {"statusCode": 200, "body": json.dumps({"keys": keys})}
