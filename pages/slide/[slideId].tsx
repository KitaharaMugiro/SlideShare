import { Button } from "@mui/material";
import { useAtom } from "jotai";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useRealtimeSharedState } from "realtimely";
import ImagePageView from "../../components/slide/ImagePageView";
import ProfileCard from "../../components/slide/ProfileCard";
import ProfileCardController from "../../components/slide/ProfileCardController";
import SlideSlider from "../../components/slide/SlideSlider";
import { UserAtom } from "../../model/jotai/User";
import { useQuerySlideQuery } from "../../src/generated/graphql";
import style from "./style.module.css";

const Page = () => {
    const router = useRouter()
    const { slideId } = router.query

    const [isAdmin, setIsAdmin] = useState(false)
    const [user] = useAtom(UserAtom)

    //slide状態変数
    const [slideState, setSlideState] = useRealtimeSharedState({
        pageNumber: 0,
    }, "slideState")
    const [localPageNumber, setLocalPageNumber] = useState(0)
    const [isSync, setIsSync] = useState(true)

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

    return (
        <div className={style.main}>

            {/* スライド */}
            <div className={style.deck_space}>
                <div>
                    <ImagePageView
                        imageUrl={viewingPage?.imageUrl}
                        identityId={slide?.createdBy}
                        onClickLeft={goPrevious}
                        onClickRight={goNext}
                    />
                    <SlideSlider
                        maxPageNumber={pages?.length || 0}
                        pageNumber={isSync ? slideState.pageNumber : localPageNumber}
                        onChangePageNumber={onChangePageNumber}
                        isSync={isSync}
                        syncSlide={syncSlide}
                    />

                </div>
                <div style={{
                    marginLeft: 60,
                    marginRight: 30,
                    width: "100%",
                }}>
                    <ProfileCardController isAdmin={isAdmin} userId={slide?.createdBy || ""} />
                </div>
            </div>



        </div>
    )

}

export default Page