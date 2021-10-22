import json

import sys
import os
import time
from random import randint
from RtcTokenBuilder import RtcTokenBuilder, Role_Attendee
from dotenv import load_dotenv

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
    session_variables = body.get("session_variables")
    userAccount = None
    if session_variables:
        userAccount = session_variables.get("x-hasura-user-id")
    # userAccount: str = input.get("userAccount")

    token = None
    tokenCreatedFromAccount = None
    if uid is not None:
        token = RtcTokenBuilder.buildTokenWithUid(
            appID, appCertificate, channelName, uid, Role_Attendee, privilegeExpiredTs
        )
        print("Token with int uid: {}".format(token))

    if userAccount is not None:
        tokenCreatedFromAccount = RtcTokenBuilder.buildTokenWithAccount(
            appID,
            appCertificate,
            channelName,
            userAccount,
            Role_Attendee,
            privilegeExpiredTs,
        )
        print("Token with user account: {}".format(tokenCreatedFromAccount))
    body = {
        "token": token,
        "tokenCreatedFromAccount": tokenCreatedFromAccount,
    }

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
