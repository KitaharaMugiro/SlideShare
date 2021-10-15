import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useRealtimeSharedState } from "realtimely";
import ImagePageView from "../../components/slide/ImagePageView";
import { useQuerySlideQuery } from "../../src/generated/graphql";
import style from "./style.module.css";

const Page = () => {
    const router = useRouter()
    const { slideId, admin } = router.query

    //slide状態変数
    const [slideState, setSlideState] = useRealtimeSharedState({
        picNumber: 0,
    }, "slideState")

    //データ取得
    const { loading, error, data: initialSlide } = useQuerySlideQuery({ variables: { slideId: Number(slideId) } })
    const pages = initialSlide?.slideshare_Slide_by_pk?.Pages
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
        slideState.picNumber = 1
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
                <ImagePageView
                    imageUrl={page?.imageUrl}
                    onClickLeft={goPrevious}
                    onClickRight={goNext}
                />
            </div>

        </div>
    )

}

export default Page