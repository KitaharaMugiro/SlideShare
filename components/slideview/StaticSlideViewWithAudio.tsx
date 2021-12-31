import React, { useEffect, useState } from "react"
import useArrowKeyboardEvent from "../../model/util-hooks/useArrowKeyboardEvent"
import { useWindowDimensions } from "../../model/util-hooks/useWindowDimentions"
import { QuerySlideQuery } from "../../src/generated/graphql"
import AdminSlideController from "../slide/AdminSlideController"
import Comments from "../slide/comments/Comments"
import PageViewController from "../slide/pageview/PageViewController"
import ProfileCardController from "../slide/ProfileCardController"
import SlideSlider from "../slide/SlideSlider"
import ControllerOnSlide from "./ControllerOnSlide"
import style from "./slideview.module.css"
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import useSlideRecordPlayer from "../../model/util-hooks/useSlideRecordPlayer"
import ControllerOnSlideWithAudio from "./ControllerOnSlideWithAudio"
import Comments2 from "../slide/comments/Comments2"
import { Dialog } from "@mui/material"
interface Props {
    initialSlide: QuerySlideQuery
    isAdmin: boolean
    selectedRecordId: number | undefined
}

export default (props: Props) => {
    const { initialSlide, isAdmin, selectedRecordId } = props

    // audio
    const { play, pause, isPlaying, seek, duration, currentPageId, rate, changeRate, skip } = useSlideRecordPlayer(props.initialSlide, selectedRecordId)
    //スライドコントローラ
    const [appearController, setAppearController] = useState(false)
    const [isFullscreen, setFullscreen] = useState(false) //for mobile safari

    const onClickFullscreen = () => {

        if (isFullscreen) {
            setFullscreen(false)
        } else {
            setFullscreen(true)
        }

    }
    //slide状態変数
    const [isSync, setIsSync] = useState(true)
    const [localPageNumber, setLocalPageNumber] = useState(0)
    const slide = initialSlide?.slideshare_Slide_by_pk
    const pages = slide?.Pages ? [...slide?.Pages].sort((a, b) => a.pageNumber - b.pageNumber) : []
    const audioPageNumber = pages.find(p => p.id === currentPageId)?.pageNumber || 0
    const viewingPage = isSync ? pages[audioPageNumber || localPageNumber] : pages[localPageNumber]

    useEffect(() => {
        if (isSync) {
            setLocalPageNumber(audioPageNumber)
        } else {
            //CHECK: 挙動としてaudioPageNumberが追いついたときにSyncさせるかどうか
            setIsSync(audioPageNumber === localPageNumber)
        }
    }, [audioPageNumber])

    const goNext = () => {
        const nextPageNumber = localPageNumber + 1
        if (nextPageNumber >= pages.length) return
        setIsSync(audioPageNumber === nextPageNumber)
        setLocalPageNumber(nextPageNumber)
    }

    const goPrevious = () => {
        const nextPageNumber = localPageNumber - 1
        if (nextPageNumber < 0) return
        setIsSync(audioPageNumber === nextPageNumber)
        setLocalPageNumber(nextPageNumber)
    }

    const syncSlide = () => {
        setIsSync(true)
        setLocalPageNumber(audioPageNumber || 0)
    }

    //keyboard event
    useArrowKeyboardEvent(goNext, goPrevious)

    const onChangePageNumber = (number: number) => {
        const nextPageNumber = number
        setIsSync(audioPageNumber === nextPageNumber)
        setLocalPageNumber(nextPageNumber)
    }

    const onClickPageLink = (pageId: string) => {
        const targetPage = pages.find(p => p.id === pageId)
        onChangePageNumber(targetPage?.pageNumber || 0)
    }

    useEffect(() => {
        if (appearController) {
            setTimeout(() => {
                setAppearController(false)
            }, 30000)
        }
    }, [appearController])
    const renderSlide = () => {
        return (
            <div style={{ position: "relative" }}
                onMouseEnter={() => setAppearController(true)}
                onMouseLeave={() => setAppearController(false)}>
                <PageViewController
                    viewingPage={viewingPage}
                    customizeWidth={slideWidth}
                    onClickLeft={goPrevious}
                    onClickRight={goNext}
                />
                <ControllerOnSlideWithAudio
                    appear={appearController}
                    onClickFullScreen={onClickFullscreen}
                    playing={isPlaying}
                    onClickPause={pause}
                    onClickPlay={play}
                    onClickChangeRate={changeRate}
                    onClickForwardOrBack={(second) => skip(second)}
                    currentRate={rate}
                    duration={duration}
                    seek={seek} />

            </div>
        )
    }


    //スライドサイズの計算
    const { width } = useWindowDimensions()
    const isRow = width > 800
    const COMMENT_WIDTH = isRow ? 340 : 0
    const MARGIN = isRow ? 100 : 40
    let slideWidth = width - COMMENT_WIDTH - MARGIN

    if (isFullscreen) {
        slideWidth = width
    }


    return <>
        {/* スライド */}
        <div className={style.deck_space}>
            <div >
                <Dialog
                    fullScreen
                    open={isFullscreen}
                    onClose={onClickFullscreen}
                >
                    {renderSlide()}

                </Dialog>
                {renderSlide()}

                <SlideSlider
                    maxPageNumber={pages?.length || 0}
                    pageNumber={isSync ? audioPageNumber || localPageNumber : localPageNumber}
                    onChangePageNumber={onChangePageNumber}
                    isSync={isSync}
                    syncSlide={syncSlide}
                />
                {isAdmin ? <AdminSlideController
                    slideId={Number(slide?.id)} /> : <div />}
            </div>

            {isRow ?
                <div style={{
                    marginLeft: 60,
                    marginRight: 30,
                }}>
                    <ProfileCardController isAdmin={isAdmin} userId={slide?.createdBy || ""} />
                    <Comments2
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
                <Comments2
                    viewingPage={viewingPage}
                    onClickLink={onClickPageLink}
                    presenterUserId={slide?.createdBy}
                />
            </div> : <div />
        }
    </>
}
