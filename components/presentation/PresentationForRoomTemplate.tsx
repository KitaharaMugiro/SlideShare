import { useTranslations } from "next-intl"
import { useEffect } from "react"
import { Room } from "../../model/Room"
import { useLoading } from "../../model/util-hooks/useLoading"
import useUser from "../../model/util-hooks/useUser"
import { useQuerySlideQuery } from "../../src/generated/graphql"
import PresentationSlideView from "../slideview/PresentationSlideView"
import style from "./style.module.css"

interface Props {
    slideId: number | undefined
    room: Room
}

export default (props: Props) => {
    const t = useTranslations("Presentation")
    const { slideId, room } = props

    const { user } = useUser()

    const { startLoading, finishLoading } = useLoading()

    //データ取得
    const { loading, error, data: initialSlide } = useQuerySlideQuery({ variables: { slideId: Number(slideId) }, fetchPolicy: "no-cache" })
    const slide = initialSlide?.slideshare_Slide_by_pk
    const isAdmin = slide?.createdBy === user?.attributes.sub

    useEffect(() => {
        if (loading) {
            startLoading()
        } else {
            finishLoading()
        }
    }, [loading])


    if (!slideId) return <div>{t("not-found")}</div>
    if (loading) return <div></div>
    if (error) return <div>{JSON.stringify(error)}</div>
    if (!slide) return <div>{t("not-found")}</div>

    return (
        <div className={style.main}>
            {initialSlide &&
                <PresentationSlideView
                    initialSlide={initialSlide}
                    isAdmin={isAdmin}
                    roomId={room.id}
                    roomTitle={room.name}
                    existsSideBar={true}
                />}
            <div style={{ height: 30 }} />
        </div>
    )
}