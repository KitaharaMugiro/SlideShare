import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useTranslations } from "use-intl";
import { v4 as uuidv4 } from "uuid";
import ConferenceSubscribeMessage from "../../components/conference/ConferenceSubscribeMessage";
import AdminWarningMessage from "../../components/presentation/AdminWarningMessage";
import ConfirmationModal from "../../components/presentation/ConfirmationModal";
import AgoraClient from "../../components/slide/AgoraClient";
import PresentationSlideView from "../../components/slideview/PresentationSlideView";
import StaticSlideView from "../../components/slideview/StaticSlideView";
import Conference from "../../model/Conference";
import { useLoading } from "../../model/util-hooks/useLoading";
import useUser from "../../model/util-hooks/useUser";
import OgpTag, { OpgMetaData } from "../../model/ogp/OgpTag";
import getOgpInfo from "../../model/serverSideRender/getOgpInfo";
import { useGetRoomQuery, useQuerySlideQuery } from "../../src/generated/graphql";
import style from "./style.module.css";
import PresentationTemplate from "../../components/presentation/PresentationTemplate";

const Page = ({ ogpInfo }: { ogpInfo: OpgMetaData }) => {
    return <>
        <OgpTag ogpInfo={ogpInfo} />
        <PresentationTemplate />
    </>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = JSON.parse(JSON.stringify(await import(`../../messages/${context.locale}.json`)))
    const ogpInfo = await getOgpInfo(context)
    return {

        props: {
            ...ogpInfo,
            messages: data
        }
    }
}


export default Page