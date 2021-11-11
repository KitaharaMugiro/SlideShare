import boto3
import json
import os


__location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))
user_pool_id = "ap-northeast-1_WilzuDo5l"
source_mail = "ngthornym@yahoo.co.jp"  # "no-reply@yunomy.com"
htmls = {"ConfirmationForSubscribing": "ConfirmationForSubscribing.html"}
# SESでメールを送信するためのハンドラ
def lambda_handler(event, context):
    USER_NAME = None
    TYPE = None
    TITLE = None
    DATE = None
    URL = None
    try:
        payload = json.loads(event["body"])
        USER_NAME = payload.get("user_name")
        TYPE = payload.get("type")
        TITLE = payload.get("title") or "勉強会"
        DATE = payload.get("date") or "1999/01/01 20:00 ~ 21:00"
        URL = payload.get("url") or "https://yahoo.co.jp"
    except:
        raise Exception("Invalid payload")

    if USER_NAME is None:
        raise Exception("Invalid payload")

    # cognitoからユーザー情報を取得
    client = boto3.client("cognito-idp")
    response = client.admin_get_user(UserPoolId=user_pool_id, Username=USER_NAME)

    attributes = response.pop("UserAttributes")
    print(attributes)
    email = None
    for attribute in attributes:
        if attribute["Name"] == "email":
            email = attribute["Value"]
            break
    print(email)
    if email is None:
        raise Exception("Email is not registered")

    # HTMLを構成
    filename = htmls[TYPE]
    filepath = os.path.join(__location__, filename)
    with open(filepath) as f:
        html_body = f.read()
    if TYPE == "ConfirmationForSubscribing":
        html_body = html_body.replace("$TITLE", TITLE)
        html_body = html_body.replace("$DATE", DATE)
        html_body = html_body.replace("$URL", URL)
    print(html_body)

    # メールタイトル
    subject = None
    if TYPE == "ConfirmationForSubscribing":
        subject = f"【PresenShare】" + TITLE + "にご参加ありがとうございます"

    ses_client = boto3.client("ses")
    # メールを送信する
    ses_client.send_email(
        Source=source_mail,
        Destination={
            "ToAddresses": [
                email,
            ]
        },
        Message={
            "Subject": {"Data": subject, "Charset": "UTF-8"},
            "Body": {
                "Text": {"Data": html_body, "Charset": "UTF-8"},
                "Html": {"Data": html_body, "Charset": "UTF-8"},
            },
        },
    )


if __name__ == "__main__":
    event = {
        "body": json.dumps(
            {
                "user_name": "60f924f1-2617-4556-846f-e9770de6b0e3",
                "type": "ConfirmationForSubscribing",
            }
        )
    }
    lambda_handler(event, None)
