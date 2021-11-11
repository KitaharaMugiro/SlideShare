import { Typography } from "@mui/material"
import { useAtom } from "jotai"
import React, { useEffect, useState } from "react"
import { useRealtimeCursor, useOnlineUsers, useRealtimeSharedState } from "realtimely"
import { SlideStateAtom } from "../../model/jotai/SlideState"
import pages from "../../pages"
import { QuerySlideQuery, Slideshare_PageType_Enum } from "../../src/generated/graphql"
import ConferenceText from "../conference/ConferenceText"
import AdminPresentationController from "../presentation/AdminPresentationController"
import UserActionDisplay from "../presentation/UserActionDisplay"
import UserPresentationController from "../presentation/UserPresentationController"
import Comments from "../slide/comments/Comments"
import PageViewController from "../slide/pageview/PageViewController"
import ProfileCardController from "../slide/ProfileCardController"
import SlideSlider from "../slide/SlideSlider"
import style from "./slideview.module.css"

interface Props {
    initialSlide: QuerySlideQuery
    isAdmin: boolean
}

export default (props: Props) => {
    const { initialSlide, isAdmin } = props
    const slide = initialSlide?.slideshare_Slide_by_pk
    const latestConference = initialSlide?.slideshare_Conference.at(0)
    const [localPageNumber, setLocalPageNumber] = useState(0)
    const [isSync, setIsSync] = useState(true)

    const pages = slide?.Pages ? [...slide?.Pages].sort((a, b) => a.pageNumber - b.pageNumber) : []
    const viewingPage = pages[localPageNumber]

    //slide状態変数
    const [localAdminSlideState] = useAtom(SlideStateAtom)
    const [slideState, setSlideState] = useRealtimeSharedState({
        pageNumber: 0,
        enableCursor: false
    }, "slideState")


    //リアルタイムカーソル
    const { renderCursors, onMouseMove } = useRealtimeCursor(1000)

    //視聴者数
    const { onlineUserList } = useOnlineUsers(10000)

    useEffect(() => {
        if (isSync) {
            setLocalPageNumber(slideState.pageNumber)
        }
    }, [slideState.pageNumber])

    useEffect(() => {
        if (isAdmin) {
            setSlideState({
                ...slideState,
                enableCursor: localAdminSlideState.cursor
            })
        }
    }, [localAdminSlideState.cursor])

    const goNext = () => {
        if (isAdmin) {
            if (slideState.pageNumber >= pages.length - 1) return
            onChangePageNumber(slideState.pageNumber + 1)
        } else {
            const nextPageNumber = localPageNumber + 1
            if (nextPageNumber >= pages.length) return
            setIsSync(slideState.pageNumber === nextPageNumber)
            setLocalPageNumber(nextPageNumber)
        }
    }

    const goPrevious = () => {
        if (isAdmin) {
            if (slideState.pageNumber <= 0) return
            onChangePageNumber(slideState.pageNumber - 1)
        } else {
            const nextPageNumber = localPageNumber - 1
            if (nextPageNumber < 0) return
            setIsSync(slideState.pageNumber === nextPageNumber)
            setLocalPageNumber(nextPageNumber)
        }
    }

    const syncSlide = () => {
        setIsSync(true)
        setLocalPageNumber(slideState.pageNumber)
    }

    const onClickPageLink = (pageId: string) => {
        const targetPage = pages.find(p => p.id === pageId)
        onChangePageNumber(targetPage?.pageNumber || 0)
    }

    const onChangePageNumber = (number: number) => {
        if (isAdmin) {
            if (viewingPage.type === Slideshare_PageType_Enum.GoogleForm || viewingPage.type === Slideshare_PageType_Enum.Typeform) {
                window.confirm("ページを切り替えると参加者が入力できなくなります。次のページに移動しますか？") && setSlideState({
                    ...slideState,
                    pageNumber: number
                })
                return
            }
            if (viewingPage.type === Slideshare_PageType_Enum.Video) {
                window.confirm("ページを切り替えると参加者は動画を見れなく無くなります。次のページに移動しますか？") && setSlideState({
                    ...slideState,
                    pageNumber: number
                })
                return
            }
            slideState.pageNumber = number
            setSlideState(slideState)
        } else {
            const nextPageNumber = number
            setIsSync(slideState.pageNumber === nextPageNumber)
            setLocalPageNumber(nextPageNumber)
        }
    }


    return (
        <div className={style.deck_space} >
            <div>
                <div style={{ position: "relative" }}
                    onMouseMove={isAdmin && slideState.enableCursor ? onMouseMove : undefined}>
                    <PageViewController
                        viewingPage={viewingPage}
                        onClickLeft={goPrevious}
                        onClickRight={goNext}
                    />
                    {slideState.enableCursor ? renderCursors() : <div />}

                </div>
                <SlideSlider
                    maxPageNumber={pages?.length || 0}
                    pageNumber={isSync ? slideState.pageNumber : localPageNumber}
                    onChangePageNumber={onChangePageNumber}
                    isSync={isSync}
                    syncSlide={syncSlide}
                />
                {isAdmin ? <AdminPresentationController /> : <UserPresentationController />}
                {latestConference ? <ConferenceText
                    title={latestConference.title || ""}
                    startDate={latestConference.startDate || ""}
                    endDate={latestConference.endDate || ""}
                /> : <div />}
                <Typography color="white" justifyContent="center">{onlineUserList ? onlineUserList.length : 0} watching</Typography>
                <UserActionDisplay />
            </div>
            <div style={{
                marginLeft: 60,
                marginRight: 30,
                width: "100%",
            }}>
                <ProfileCardController isAdmin={isAdmin} userId={slide?.createdBy || ""} />
                <Comments
                    viewingPage={viewingPage}
                    onClickLink={onClickPageLink}
                />
            </div>
        </div>
    )
}