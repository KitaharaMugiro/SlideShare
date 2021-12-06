import json

import sys
import os
import time
from random import randint
from RtcTokenBuilder import RtcTokenBuilder, Role_Subscriber, Role_Publisher

appID = os.environ.get("appID")
appCertificate = os.environ.get("appCertificate")
expireTimeInSeconds = 3600 * 3
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

    # 参加者かホストかは自分で決める
    role = Role_Subscriber
    if "presentation" in channelName:
        host: str = input.get("host")
        session_variables = body.get("session_variables")
        if session_variables:
            userAccount = session_variables.get("x-hasura-user-id")
            if userAccount == host:
                # Speaker
                role = Role_Publisher
    elif "room" in channelName:
        role = Role_Publisher

    token = RtcTokenBuilder.buildTokenWithUid(
        appID, appCertificate, channelName, uid, role, privilegeExpiredTs
    )
    print("Token with int uid: {}".format(token))

    body = {"token": token}

    response = {"statusCode": 200, "body": json.dumps(body)}

    return response
