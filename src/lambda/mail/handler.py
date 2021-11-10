import boto3
import json


user_pool_id = "ap-northeast-1_WilzuDo5l"

# SESでメールを送信するためのハンドラ
def lambda_handler(event, context):
    user_name = None
    try:
        payload = json.loads(event["body"])
        user_name = payload.get("user_name")
    except:
        raise Exception("Invalid payload")

    if user_name is None:
        raise Exception("Invalid payload")

    # cognitoからユーザー情報を取得
    client = boto3.client("cognito-idp")
    response = client.admin_get_user(UserPoolId=user_pool_id, Username=user_name)

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

    ses_client = boto3.client("ses")
    # メールを送信する
    ses_client.send_email(
        Source="no-reply@yunomy.com",
        Destination={
            "ToAddresses": [
                email,
            ]
        },
        Message={
            "Subject": {"Data": "テストメール", "Charset": "UTF-8"},
            "Body": {"Text": {"Data": "テスト本文", "Charset": "UTF-8"}},
        },
    )


if __name__ == "__main__":
    event = {"body": json.dumps({"user_name": "60f924f1-2617-4556-846f-e9770de6b0e3"})}
    lambda_handler(event, None)
