import { Divider, Button } from "@mui/material"
import React from "react"
import SocialSignin from "../../components/common/SocialSignin"
import style from "./index.module.css"
import Amplify, { Auth, Hub } from 'aws-amplify';
import { GetServerSideProps } from "next";
import getOgpInfo from "../../model/serverSideRender/getOgpInfo";
import OgpTag, { OpgMetaData } from "../../model/ogp/OgpTag";



export default ({ ogpInfo }: { ogpInfo: OpgMetaData }) => {
    return <div className={style.center}>
        <OgpTag ogpInfo={ogpInfo} />

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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = JSON.parse(JSON.stringify(await import(`../../messages/${context.locale}.json`)))
    return {
        ...getOgpInfo(context),
        props: {
            messages: data
        }
    }
}
