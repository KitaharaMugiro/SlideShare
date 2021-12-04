import React, { useEffect, useState } from "react";
import useSignin from "../../model/util-hooks/useSignin";
import useUser from "../../model/util-hooks/useUser";
import { QueryUserSlideQuery, QueryUserSlideQueryResult, Slideshare_Slide, useQueryUserSlideLazyQuery, useQueryUserSlideQuery } from "../../src/generated/graphql";
import { Auth } from 'aws-amplify';
import SlideCard from "../../components/slide/SlideCard";
import { Button, Typography } from "@mui/material";
import useMySlidePagenation from "../../model/util-hooks/useMySlidePagenation";

//TODO: Pagenationをhooksに落とし込めないかな
export default () => {
    const { localSlides, onDeleteCard, loadMore } = useMySlidePagenation()
    const { goSignin } = useSignin()
    useEffect(() => {
        Auth.currentAuthenticatedUser().catch(() => {
            goSignin()
        })
    }, [])

    const renderCards = () => {
        return localSlides?.slideshare_Slide.map((slide) => {
            return <div key={slide.id} style={{ margin: 30 }}>
                <SlideCard
                    slideId={slide.id}
                    imageUrl={slide.Pages ? slide.Pages[0]?.imageUrl : undefined}
                    onDeleteCard={onDeleteCard}
                    linkTo="slide"
                    actionMode="mypage" />
            </div>
        })
    }


    return (
        <div>
            <Typography variant="h1" style={{ marginLeft: 30 }}>Slides</Typography>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {renderCards()}
            </div>
            <Button onClick={loadMore}>さらに読み込む</Button>
        </div>
    );
}