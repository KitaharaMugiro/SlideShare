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

const Page = ({ ogpInfo }: { ogpInfo: OpgMetaData }) => {
    const t = useTranslations("Presentation")
    const router = useRouter()
    const { slideId, roomId } = router.query

    const { user } = useUser()
    const [uuid] = useState(uuidv4())

    const { startLoading, finishLoading } = useLoading()

    //データ取得
    const { loading, error, data: initialSlide } = useQuerySlideQuery({ variables: { slideId: Number(slideId) }, fetchPolicy: "no-cache" })
    const { data: room } = useGetRoomQuery({ variables: { id: Number(roomId) } })
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


    //TODO: もうちょっと見通しのいい関数にしたい
    const renderSlideIfActiveConference = () => {
        if (!roomId) {
            if (!isAdmin) {
                if (conferenceModel?.state === "beforeStart") {
                    return <div>
                        <ConferenceSubscribeMessage
                            conference={conferenceModel}
                            slideId={Number(slideId)} />
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
        }

        //ongoing もしくは isAdmin もしくはroomIdが存在
        return <>
            {!isAdmin && <ConfirmationModal />}
            {slide ?
                < AgoraClient
                    uid={uuid}
                    host={slide.createdBy}
                    channelName={`presentation-${slide.createdBy}-${slide.id}`}
                    isHost={isAdmin} />
                : <div />}

            {!roomId && isAdmin && conferenceModel &&
                <AdminWarningMessage
                    conferenceModel={conferenceModel} />}


            {/* スライド */}
            {initialSlide &&
                <PresentationSlideView
                    initialSlide={initialSlide}
                    isAdmin={isAdmin}
                    roomId={Number(roomId)}
                    roomTitle={room?.slideshare_Room_by_pk?.name || undefined}
                />}

        </>
    }

    //WARN: 早期リターンしているがOGP情報だけは返却する
    if (loading) return <div><OgpTag ogpInfo={ogpInfo} /></div>
    if (error) return <div>{JSON.stringify(error)}</div>
    if (!slide) return <div>{t("not-found")}</div>

    return (
        <div className={style.main}>
            <OgpTag ogpInfo={ogpInfo} />
            {renderSlideIfActiveConference()}
            <div style={{ height: 30 }} />
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