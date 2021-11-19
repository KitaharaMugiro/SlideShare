import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
import { useTranslations } from "use-intl";
import { v4 as uuidv4 } from "uuid";
import MobileSlideView from "../../components/common/MobileSlideView";
import ConferenceSubscribeMessage from "../../components/conference/ConferenceSubscribeMessage";
import AdminWarningMessage from "../../components/presentation/AdminWarningMessage";
import ConfirmationModal from "../../components/presentation/ConfirmationModal";
import AgoraClient from "../../components/slide/AgoraClient";
import PresentationSlideView from "../../components/slideview/PresentationSlideView";
import StaticSlideView from "../../components/slideview/StaticSlideView";
import Conference from "../../model/Conference";
import { useLoading } from "../../model/hooks/useLoading";
import useUser from "../../model/hooks/useUser";
import OgpTag, { OpgMetaData } from "../../model/ogp/OgpTag";
import getOgpInfo from "../../model/serverSideRender/getOgpInfo";
import { useQuerySlideQuery } from "../../src/generated/graphql";
import style from "./style.module.css";

const Page = ({ ogpInfo }: { ogpInfo: OpgMetaData }) => {
    const t = useTranslations("Presentation")
    const router = useRouter()
    const { slideId } = router.query

    const { user } = useUser()
    const [uuid] = useState(uuidv4())

    const { startLoading, finishLoading } = useLoading()

    //データ取得
    const { loading, error, data: initialSlide } = useQuerySlideQuery({ variables: { slideId: Number(slideId) }, fetchPolicy: "no-cache" })
    const slide = initialSlide?.slideshare_Slide_by_pk
    const latestConference = initialSlide?.slideshare_Conference ? initialSlide?.slideshare_Conference[0] : undefined
    const conferenceModel = Conference(latestConference)
    const isAdmin = slide?.createdBy === user?.attributes.sub

    useEffect(() => {
        if (loading) {
            startLoading()
        } else {
            finishLoading()
        }
    }, [loading])


    const renderSlideIfActiveConference = () => {
        if (!isAdmin) {
            if (conferenceModel?.state === "beforeStart") {
                return <div>
                    <ConferenceSubscribeMessage
                        conference={conferenceModel} />
                    {/* TODO: このunwrap微妙 */}
                    {/* スライド */}
                    {initialSlide &&
                        <StaticSlideView initialSlide={initialSlide} isAdmin={isAdmin} />}

                </div>
            }
            if (conferenceModel?.state === "completeEnd") {
                return (
                    <div>
                        <Dialog
                            open={true}
                        >
                            <DialogTitle id="alert-dialog-title">
                                {t("finished-conference")}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    {t("finished-conference-description1", { date: conferenceModel.endDateString })}<br />
                                    {t("finished-conference-description2")}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => router.push(`/slide/${slideId}`)} autoFocus>
                                    {t("go-to-slide")}
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                );
            }
        }

        //ongoing もしくは isAdmin
        return <>
            {!isAdmin && <ConfirmationModal />}
            {slide ?
                < AgoraClient
                    uid={uuid}
                    host={slide.createdBy}
                    channelName={`${slide.createdBy}-${slide.id}`}
                    isHost={isAdmin} />
                : <div />}

            {isAdmin && conferenceModel &&
                <AdminWarningMessage
                    conferenceModel={conferenceModel} />}


            {/* スライド */}
            {initialSlide &&
                <PresentationSlideView initialSlide={initialSlide} isAdmin={isAdmin} />}

        </>
    }

    //WARN: 早期リターンしているがOGP情報だけは返却する
    if (loading) return <div><OgpTag ogpInfo={ogpInfo} /></div>
    if (error) return <div>{JSON.stringify(error)}</div>
    if (!slide) return <div>{t("not-found")}</div>

    if (isMobile) {
        return <MobileSlideView />
    }
    return (
        <div className={style.main}>
            <OgpTag ogpInfo={ogpInfo} />
            {renderSlideIfActiveConference()}
        </div>
    )
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


export default Page