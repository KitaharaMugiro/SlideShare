import React, { useEffect, useState } from "react"
import { isMobile } from "react-device-detect"
import useArrowKeyboardEvent from "../../model/util-hooks/useArrowKeyboardEvent"
import { useWindowDimensions } from "../../model/util-hooks/useWindowDimentions"
import { QuerySlideQuery } from "../../src/generated/graphql"
import AdminSlideController from "../slide/AdminSlideController"
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


    //slide状態変数
    const [localPageNumber, setLocalPageNumber] = useState(0)
    const slide = initialSlide?.slideshare_Slide_by_pk
    const pages = slide?.Pages ? [...slide?.Pages].sort((a, b) => a.pageNumber - b.pageNumber) : []
    const viewingPage = pages[localPageNumber]

    const goNext = () => {
        const nextPageNumber = localPageNumber + 1
        if (nextPageNumber >= pages.length) return
        setLocalPageNumber(nextPageNumber)
    }

    const goPrevious = () => {
        const nextPageNumber = localPageNumber - 1
        if (nextPageNumber < 0) return
        setLocalPageNumber(nextPageNumber)
    }

    //keyboard event
    useArrowKeyboardEvent(goPrevious, goNext)

    const onChangePageNumber = (number: number) => {
        const nextPageNumber = number
        setLocalPageNumber(nextPageNumber)
    }

    const onClickPageLink = (pageId: string) => {
        const targetPage = pages.find(p => p.id === pageId)
        onChangePageNumber(targetPage?.pageNumber || 0)
    }

    //スライドサイズの計算
    const { width } = useWindowDimensions()
    const isRow = width > 800
    const COMMENT_WIDTH = isRow ? 340 : 0
    const MARGIN = isRow ? 100 : 40
    const slideWidth = width - COMMENT_WIDTH - MARGIN

    return <>
        {/* スライド */}
        <div className={style.deck_space} >
            <div >

                <div style={{ position: "relative" }}>
                    <PageViewController
                        viewingPage={viewingPage}
                        customizeWidth={slideWidth}
                        onClickLeft={goPrevious}
                        onClickRight={goNext}
                    />
                </div>
                <SlideSlider
                    maxPageNumber={pages?.length || 0}
                    pageNumber={localPageNumber}
                    onChangePageNumber={onChangePageNumber}
                    isSync={false}
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
}