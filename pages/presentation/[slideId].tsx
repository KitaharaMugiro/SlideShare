import { Alert, AlertTitle, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { format } from "date-fns";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
import { v4 as uuidv4 } from "uuid";
import MobileSlideView from "../../components/common/MobileSlideView";
import AdminWarningMessage from "../../components/presentation/AdminWarningMessage";
import ConfirmationModal from "../../components/presentation/ConfirmationModal";
import AgoraClient from "../../components/slide/AgoraClient";
import PresentationSlideView from "../../components/slideview/PresentationSlideView";
import { useLoading } from "../../model/hooks/useLoading";
import useUser from "../../model/hooks/useUser";
import OgpTag, { OpgMetaData } from "../../model/ogp/OgpTag";
import getOgpInfo from "../../model/serverSideRender/getOgpInfo";
import { useQuerySlideQuery } from "../../src/generated/graphql";
import StaticSlideView from "../../components/slideview/StaticSlideView";
import style from "./style.module.css";
import ConferenceSubscribeMessage from "../../components/conference/ConferenceSubscribeMessage";
import Conference from "../../model/Conference";

const Page = ({ ogpInfo }: { ogpInfo: OpgMetaData }) => {
    const router = useRouter()
    const { slideId } = router.query

    const { user } = useUser()
    const [uuid] = useState(uuidv4())

    const { startLoading, finishLoading } = useLoading()

    //データ取得
    const { loading, error, data: initialSlide } = useQuerySlideQuery({ variables: { slideId: Number(slideId) }, fetchPolicy: "no-cache" })
    const slide = initialSlide?.slideshare_Slide_by_pk
    const latestConference = initialSlide?.slideshare_Conference.at(0)
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
                        startDate={conferenceModel.startDate}
                        title={latestConference?.title || ""}
                        conferenceId={latestConference?.id || 0} />
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
                                登壇は終了しました
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    {conferenceModel.endDateString}に終了しました。<br />
                                    引き続き登壇資料を見ることはできます。
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => router.push(`/slide/${slideId}`)} autoFocus>
                                    スライドを見る
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
    if (!slide) return <div>存在しないスライドです</div>

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
    return getOgpInfo(context)
}

export default Page