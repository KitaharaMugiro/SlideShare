import json

import sys
import os
import time
from random import randint
from RtcTokenBuilder import RtcTokenBuilder, Role_Subscriber, Role_Publisher

appID = os.environ.get("appID")
appCertificate = os.environ.get("appCertificate")
expireTimeInSeconds = 3600
currentTimestamp = int(time.time())
privilegeExpiredTs = currentTimestamp + expireTimeInSeconds


def hello(event, context):
    print("start lambda")
    body = json.loads(event["body"])
    print(body)
    input = body["input"]["input"]
    print(input)
    channelName: str = input["channelName"]
    uid: str = input.get("uid")
    host: str = input.get("host")
    session_variables = body.get("session_variables")
    role = Role_Subscriber
    if session_variables:
        userAccount = session_variables.get("x-hasura-user-id")
        if userAccount == host:
            # Speaker
            role = Role_Publisher

    if role == Role_Subscriber:
        print("role: audience")
    elif role == Role_Publisher:
        print("role: host")

    token = RtcTokenBuilder.buildTokenWithUid(
        appID, appCertificate, channelName, uid, role, privilegeExpiredTs
    )
    print("Token with int uid: {}".format(token))

    body = {"token": token}

    response = {"statusCode": 200, "body": json.dumps(body)}

    return response

    # Use this code if you don't use the http event with the LAMBDA-PROXY
    # integration
    """
    return {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "event": event
    }
    """
