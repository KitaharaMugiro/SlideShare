import { Typography } from "@mui/material"
import { useRouter } from "next/dist/client/router"
import React, { useEffect, useState } from "react"
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import { useOnlineUsers, useRealtimeSharedState, useRealtimeUserAction } from "realtimely"
import { RealtimeUserAction } from "realtimely/dist/models/RealtimeUserAction"
import useArrowKeyboardEvent from "../../model/util-hooks/useArrowKeyboardEvent"
import useSlideRecorder from "../../model/util-hooks/useSlideRecorder"
import { useWindowDimensions } from "../../model/util-hooks/useWindowDimentions"
import { QuerySlideQuery, Slideshare_PageType_Enum } from "../../src/generated/graphql"
import ConferenceText from "../conference/ConferenceText"
import AdminPresentationController from "../presentation/AdminPresentationController"
import UserActionDisplay from "../presentation/UserActionDisplay"
import UserPresentationController from "../presentation/UserPresentationController"
import Comments from "../slide/comments/Comments"
import PageViewController from "../slide/pageview/PageViewController"
import ProfileCardController from "../slide/ProfileCardController"
import SlideSlider from "../slide/SlideSlider"
import ControllerOnSlide from "./ControllerOnSlide"
import style from "./slideview.module.css"

interface Props {
    initialSlide: QuerySlideQuery
    isAdmin: boolean
    roomId?: number
}

export default (props: Props) => {
    const router = useRouter()
    const { initialSlide, isAdmin } = props
    const slide = initialSlide?.slideshare_Slide_by_pk
    const latestConference = initialSlide?.slideshare_Conference ? initialSlide?.slideshare_Conference[0] : undefined
    const [localPageNumber, setLocalPageNumber] = useState(0)
    const [isSync, setIsSync] = useState(true)

    const pages = slide?.Pages ? [...slide?.Pages].sort((a, b) => a.pageNumber - b.pageNumber) : []
    const viewingPage = pages[localPageNumber]

    //スライドコントローラ
    const [appearController, setAppearController] = useState(false)
    const fullscreenHandle = useFullScreenHandle();

    //録音機能
    const { startSlideRecord, stopSlideRecord, changePage, seconds, minutes, hours } = useSlideRecorder()

    //slide状態変数
    const [slideState, setSlideState] = useRealtimeSharedState({
        pageNumber: 0
    }, "slideState")
    const [finished, setFinished] = useState(false)
    const { pushUserAction, createdUserAction } = useRealtimeUserAction()

    //視聴者数
    const { onlineUserList } = useOnlineUsers(10000)

    useEffect(() => {
        if (isSync) {
            setLocalPageNumber(slideState.pageNumber)
        }
    }, [slideState.pageNumber])

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

    useArrowKeyboardEvent(goPrevious, goNext)

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
                const result = window.confirm("ページを切り替えると参加者が入力できなくなります。次のページに移動しますか？")
                if (!result) return
            } else if (viewingPage.type === Slideshare_PageType_Enum.Video) {
                const result = window.confirm("ページを切り替えると参加者は動画を見れなく無くなります。次のページに移動しますか？")
                if (!result) return
            }
            slideState.pageNumber = number
            setSlideState(slideState)
            setLocalPageNumber(number)

            //録音している場合はページチェンジを記録
            changePage(pages[number].id)
        } else {
            const nextPageNumber = number
            setIsSync(slideState.pageNumber === nextPageNumber)
            setLocalPageNumber(nextPageNumber)
        }
    }

    const onClickStartRecord = () => {
        if (slide) startSlideRecord(slide?.id)
    }

    const onFinishPresentation = () => {
        stopSlideRecord()
        pushUserAction("finishPresentation", "finish")
    }

    useEffect(() => {
        const c = createdUserAction as RealtimeUserAction
        if (c) {
            if (!finished && c.actionId === "finishPresentation") {
                setFinished(true)
                if (props.isAdmin) return
                window.alert("登壇が終了しました。")
                if (props.roomId) {
                    //href使ってるのは確か録音を強制的に終わらせるためか。
                    window.location.href = "/rooms?roomId=" + props.roomId
                } else {
                    window.location.href = "/slide/" + slide?.id
                }

            }
        }
    }, [createdUserAction])

    //スライドサイズの計算
    const { width } = useWindowDimensions()
    const isRow = width > 800
    const COMMENT_WIDTH = isRow ? 340 : 0
    const MARGIN = isRow ? 100 : 40
    let slideWidth = width - COMMENT_WIDTH - MARGIN
    if (fullscreenHandle.active) {
        slideWidth = width
    }

    return (
        <>
            <div className={style.deck_space} >
                <div>
                    <FullScreen handle={fullscreenHandle}>
                        <div style={{ position: "relative" }}
                            onMouseEnter={() => setAppearController(true)}
                            onMouseLeave={() => setAppearController(false)}>
                            <PageViewController
                                viewingPage={viewingPage}
                                customizeWidth={slideWidth}
                                onClickLeft={goPrevious}
                                onClickRight={goNext}
                            />
                            <ControllerOnSlide
                                appear={appearController}
                                onClickFullScreen={fullscreenHandle.active ? fullscreenHandle.exit : fullscreenHandle.enter} />
                        </div>
                    </FullScreen>
                    <SlideSlider
                        maxPageNumber={pages?.length || 0}
                        pageNumber={isSync ? slideState.pageNumber : localPageNumber}
                        onChangePageNumber={onChangePageNumber}
                        isSync={isSync}
                        syncSlide={syncSlide}
                    />
                    {isAdmin ? <AdminPresentationController
                        onClickStartRecord={onClickStartRecord}
                        onFinishPresentation={onFinishPresentation}
                    /> : <UserPresentationController />}
                    {latestConference ? <ConferenceText
                        title={latestConference.title || ""}
                        startDate={latestConference.startDate || ""}
                        endDate={latestConference.endDate || ""}
                    /> : <div />}
                    <Typography color="white" justifyContent="center">{onlineUserList ? onlineUserList.length : 0} watching</Typography>
                    <UserActionDisplay />
                </div>
                {isRow ?
                    <div style={{
                        marginLeft: 60,
                        marginRight: 30,
                    }}>
                        <ProfileCardController isAdmin={isAdmin} userId={slide?.createdBy || ""} />
                        <Comments
                            viewingPage={viewingPage}
                            onClickLink={onClickPageLink}
                            presenterUserId={slide?.createdBy}
                        />
                    </div> : <div />}
            </div>
            {!isRow ?
                <div style={{
                    marginTop: 60,
                    marginLeft: 10,
                    marginRight: 10
                }}>
                    <ProfileCardController isAdmin={isAdmin} userId={slide?.createdBy || ""} />
                    <Comments
                        viewingPage={viewingPage}
                        onClickLink={onClickPageLink}
                        presenterUserId={slide?.createdBy}
                    />
                </div> : <div />
            }
        </>
    )
}