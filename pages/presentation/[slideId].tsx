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
import style from "./style.module.css";

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
    const isAdmin = slide?.createdBy === user?.attributes.sub

    useEffect(() => {
        if (loading) {
            startLoading()
        } else {
            finishLoading()
        }
    }, [loading])


    const renderSlideIfActiveConference = () => {
        const startDate = new Date(latestConference?.startDate)
        const endDate = new Date(latestConference?.endDate)
        if (!isAdmin) {
            if (startDate > new Date()) {
                return <div>
                    <Alert severity="success">
                        <AlertTitle>{format(startDate, "yyyy/MM/dd HH:mm")} から開催します。</AlertTitle>
                        <strong>「{latestConference?.title}」</strong>を忘れずに参加しましょう。
                        {/* TODO: 実装予定 */}
                        {/* <div style={{ height: 10 }} />
                        <Button variant="contained">申し込む</Button> */}
                    </Alert>
                </div>
            }
            if (endDate < new Date()) {
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
                                    {format(endDate, "yyyy/MM/dd HH:mm")}に終了しました。<br />
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
        return <>
            {!isAdmin && <ConfirmationModal />}
            {slide ?
                < AgoraClient
                    uid={uuid}
                    host={slide.createdBy}
                    channelName={`${slide.createdBy}-${slide.id}`}
                    isHost={isAdmin} />
                : <div />}

            {latestConference &&
                <AdminWarningMessage
                    conferenceId={latestConference.id}
                    startDate={startDate}
                    endDate={endDate} />}


            {/* スライド */}
            <PresentationSlideView initialSlide={initialSlide} isAdmin={isAdmin} />

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