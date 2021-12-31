import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { useTranslations } from "next-intl"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import Conference from "../../model/Conference"
import { useLoading } from "../../model/util-hooks/useLoading"
import useUser from "../../model/util-hooks/useUser"
import { useGetRoomQuery, useQuerySlideQuery } from "../../src/generated/graphql"
import ConferenceSubscribeMessage from "../conference/ConferenceSubscribeMessage"
import AgoraClient from "../slide/AgoraClient"
import PresentationSlideView from "../slideview/PresentationSlideView"
import StaticSlideView from "../slideview/StaticSlideView"
import AdminWarningMessage from "./AdminWarningMessage"
import ConfirmationModal from "./ConfirmationModal"
import style from "./style.module.css"

export default () => {
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
    if (loading) return <div></div>
    if (error) return <div>{JSON.stringify(error)}</div>
    if (!slide) return <div>{t("not-found")}</div>

    return (
        <div className={style.main}>
            {renderSlideIfActiveConference()}
            <div style={{ height: 30 }} />
        </div>
    )
}