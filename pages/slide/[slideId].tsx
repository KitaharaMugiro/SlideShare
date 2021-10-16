import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useRealtimeSharedState } from "realtimely";
import ImagePageView from "../../components/slide/ImagePageView";
import ProfileCard from "../../components/slide/ProfileCard";
import SlideSlider from "../../components/slide/SlideSlider";
import { useQuerySlideQuery } from "../../src/generated/graphql";
import style from "./style.module.css";

const Page = () => {
    const router = useRouter()
    const { slideId, admin: isAdmin } = router.query

    //slide状態変数
    const [slideState, setSlideState] = useRealtimeSharedState({
        pageNumber: 0,
    }, "slideState")
    const [localPageNumber, setLocalPageNumber] = useState(0)
    const [isSync, setIsSync] = useState(true)

    //データ取得
    const { loading, error, data: initialSlide } = useQuerySlideQuery({ variables: { slideId: Number(slideId) } })
    const slide = initialSlide?.slideshare_Slide_by_pk
    const pages = slide?.Pages
    const viewingPage = pages?.at(localPageNumber)

    useEffect(() => {
        if (isSync) {
            setLocalPageNumber(slideState.pageNumber)
        }
    }, [slideState.pageNumber])

    const goNext = () => {
        if (isAdmin) {
            slideState.pageNumber += 1
            setSlideState(slideState)
        } else {
            const nextPageNumber = localPageNumber + 1
            setIsSync(slideState.pageNumber === nextPageNumber)
            setLocalPageNumber(nextPageNumber)
        }
    }

    const goPrevious = () => {
        if (isAdmin) {
            slideState.pageNumber -= 1
            setSlideState(slideState)
        } else {
            const nextPageNumber = localPageNumber - 1
            setIsSync(slideState.pageNumber === nextPageNumber)
            setLocalPageNumber(nextPageNumber)
        }
    }

    const goStart = () => {
        if (isAdmin) {
            slideState.pageNumber = 0
            setSlideState(slideState)
        } else {
            setLocalPageNumber(0)
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

            {/* Adminコントロール(TODO: 消す) */}
            {isAdmin ? <div>
                <button onClick={goStart}>Back to beginning</button>
                <button onClick={goPrevious}>Previous</button>
                <button onClick={goNext}>Next</button>
            </div> : <div />}

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
                    marginLeft: 30,
                    marginRight: 30,
                    width: "100%",
                }}>
                    <ProfileCard
                        name="test"
                        subtitle="hogehoge"
                        description="株式会社HOGE CEO"
                    />
                </div>
            </div>



        </div>
    )

}

export default Page