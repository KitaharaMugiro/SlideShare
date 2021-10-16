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
    const { slideId, admin } = router.query

    //slide状態変数
    const [slideState, setSlideState] = useRealtimeSharedState({
        picNumber: 0,
    }, "slideState" + slideId)

    //データ取得
    const { loading, error, data: initialSlide } = useQuerySlideQuery({ variables: { slideId: Number(slideId) } })
    const slide = initialSlide?.slideshare_Slide_by_pk
    const pages = slide?.Pages
    const page = pages?.at(slideState.picNumber)

    const goNext = () => {
        slideState.picNumber += 1
        setSlideState(slideState)
    }

    const goPrevious = () => {
        slideState.picNumber -= 1
        setSlideState(slideState)
    }

    const goStart = () => {
        slideState.picNumber = 0
        setSlideState(slideState)
    }

    const onChangePageNumber = (number: number) => {
        slideState.picNumber = number
        setSlideState(slideState)
    }

    return (
        <div className={style.main}>

            {/* Adminコントロール */}
            {admin ? <div>
                <button onClick={goStart}>Back to beginning</button>
                <button onClick={goPrevious}>Previous</button>
                <button onClick={goNext}>Next</button>
            </div> : <div />}

            {/* スライド */}
            <div className={style.deck_space}>
                <div>
                    <ImagePageView
                        imageUrl={page?.imageUrl}
                        identityId={slide?.createdBy}
                        onClickLeft={goPrevious}
                        onClickRight={goNext}
                    />
                    <SlideSlider
                        maxPageNumber={pages?.length || 0}
                        pageNumber={slideState.picNumber}
                        onChangePageNumber={onChangePageNumber}
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