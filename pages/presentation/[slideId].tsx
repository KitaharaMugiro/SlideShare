import { Typography } from "@mui/material";
import { useAtom } from "jotai";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useOnlineUsers, useRealtimeCursor, useRealtimeSharedState } from "realtimely";
import { v4 as uuidv4 } from "uuid";
import AgoraClient from "../../components/slide/AgoraClient";
import Comments from "../../components/slide/comments/Comments";
import PageViewController from "../../components/slide/pageview/PageViewController";
import ProfileCardController from "../../components/slide/ProfileCardController";
import AdminSlideController from "../../components/slide/AdminSlideController";
import SlideSlider from "../../components/slide/SlideSlider";
import useUser from "../../model/hooks/useUser";
import { SlideStateAtom } from "../../model/jotai/SlideState";
import { useQuerySlideQuery } from "../../src/generated/graphql";
import style from "./style.module.css";

const Page = () => {
    const router = useRouter()
    const { slideId } = router.query

    const [isAdmin, setIsAdmin] = useState(false)
    const { user } = useUser()
    const [uuid] = useState(uuidv4())

    //slide状態変数
    const [localAdminSlideState] = useAtom(SlideStateAtom)
    const [slideState, setSlideState] = useRealtimeSharedState({
        pageNumber: 0,
        enableCursor: true
    }, "slideState")
    const [localPageNumber, setLocalPageNumber] = useState(0)
    const [isSync, setIsSync] = useState(true)

    //リアルタイムカーソル
    // TODO: 一旦止める
    // const { renderCursors, onMouseMove } = useRealtimeCursor()

    //視聴者数
    const { onlineUserList } = useOnlineUsers()

    //データ取得
    const { loading, error, data: initialSlide } = useQuerySlideQuery({ variables: { slideId: Number(slideId) }, fetchPolicy: "no-cache" })
    const slide = initialSlide?.slideshare_Slide_by_pk
    const pages = slide?.Pages ? [...slide?.Pages].sort((a, b) => a.pageNumber - b.pageNumber) : []
    const viewingPage = pages[localPageNumber]

    useEffect(() => {
        //TODO: Realtimely側をsecureにしないと意味ない
        if (slide && user) {
            if (slide?.createdBy === user?.attributes.sub) {
                setIsAdmin(true)
            }
        }
    }, [user, slide])

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
            slideState.pageNumber += 1
            setSlideState(slideState)
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
            slideState.pageNumber -= 1
            setSlideState(slideState)
        } else {
            const nextPageNumber = localPageNumber - 1
            if (nextPageNumber < 0) return
            setIsSync(slideState.pageNumber === nextPageNumber)
            setLocalPageNumber(nextPageNumber)
        }
    }

    const onChangePageNumber = (number: number) => {
        if (isAdmin) {
            slideState.pageNumber = number
            setSlideState(slideState)
        } else {
            const nextPageNumber = number
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

    if (loading) return <div>ロード中</div>
    if (error) return <div>{JSON.stringify(error)}</div>

    return (
        <div className={style.main}>
            <AgoraClient
                uid={uuid}
                host={slide?.createdBy || ""}
                channelName={slide?.createdBy || ""}
                isHost={isAdmin} />

            {/* スライド */}
            <div className={style.deck_space} >
                <div>
                    <div style={{ position: "relative" }}>
                        {/* onMouseMove={isAdmin && slideState.enableCursor ? onMouseMove : undefined}> */}
                        <PageViewController
                            viewingPage={viewingPage}
                            onClickLeft={goPrevious}
                            onClickRight={goNext}
                        />
                        {/* {slideState.enableCursor ? renderCursors() : <div />} */}
                    </div>
                    <SlideSlider
                        maxPageNumber={pages?.length || 0}
                        pageNumber={isSync ? slideState.pageNumber : localPageNumber}
                        onChangePageNumber={onChangePageNumber}
                        isSync={isSync}
                        syncSlide={syncSlide}
                    />
                    {isAdmin ? <AdminSlideController /> : <div />}
                    <Typography color="white" justifyContent="center">視聴者数: {onlineUserList ? onlineUserList.length : 0}人</Typography>
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
        </div>
    )
}

export default Page