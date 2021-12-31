import { useTranslations } from "next-intl"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import Conference from "../../model/Conference"
import { useLoading } from "../../model/util-hooks/useLoading"
import useUser from "../../model/util-hooks/useUser"
import { useGetRoomQuery, useQuerySlideQuery } from "../../src/generated/graphql"
import AgoraClient from "../slide/AgoraClient"
import PresentationSlideView from "../slideview/PresentationSlideView"
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

    const renderSlideIfActiveConference = () => {
        return <>
            {slide ?
                < AgoraClient
                    uid={uuid}
                    host={slide.createdBy}
                    channelName={`presentation-${slide.createdBy}-${slide.id}`}
                    isHost={isAdmin} />
                : <div />}

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