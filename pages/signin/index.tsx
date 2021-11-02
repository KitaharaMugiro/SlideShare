import { Divider, Button } from "@mui/material"
import React from "react"
import SocialSignin from "../../components/common/SocialSignin"
import style from "./index.module.css"
import Amplify, { Auth, Hub } from 'aws-amplify';

export default () => {
    return <div className={style.center}>
        <div style={{ height: 30 }} />
        <div>
            <SocialSignin />
        </div>


        <div style={{ height: 30 }} />
        <Divider flexItem>
            OR
        </Divider>
        <div style={{ height: 20 }} />


        <Button onClick={() => Auth.federatedSignIn()} >ログイン</Button>

    </div>
}