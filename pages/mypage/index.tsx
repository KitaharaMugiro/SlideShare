import React, { useEffect, useState } from "react";
import useSignin from "../../model/hooks/useSignin";
import useUser from "../../model/hooks/useUser";
import { QueryUserSlideQuery, QueryUserSlideQueryResult, Slideshare_Slide, useQueryUserSlideLazyQuery, useQueryUserSlideQuery } from "../../src/generated/graphql";
import { Auth } from 'aws-amplify';
import SlideCard from "../../components/slide/SlideCard";
import { Button, Typography } from "@mui/material";

export default () => {
    const { user } = useUser()
    const { goSignin } = useSignin()
    const [offset, setOffset] = useState(0)
    const { data, loading, error, refetch } = useQueryUserSlideQuery({
        variables: {
            offset: offset,
            userId: user?.attributes.sub || ""
        }
    })
    const [localSlides, setLocalSlides] = useState<QueryUserSlideQuery | undefined>(undefined)

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
                    imageUrl={slide.Pages ? slide.Pages[0].imageUrl : undefined}
                    onDeleteCard={onDeleteCard} />

            </div>
        })
    }

    const onDeleteCard = (slideId: number) => {
        if (localSlides) {
            const newSlides = localSlides.slideshare_Slide.filter((slide) => {
                return slide.id !== slideId
            })
            setLocalSlides({
                ...data,
                slideshare_Slide: newSlides
            })
        }
    }

    //TODO: クエリでとってきたものをローカルに持って表示するケースのベストプラクティスは？
    useEffect(() => {
        if (data?.slideshare_Slide && !localSlides) {
            setLocalSlides(data)
        }
    }, [data])

    const loadMore = async () => {
        const { data: newData } = await refetch({
            userId: user?.attributes.sub || "",
            offset: offset + 10
        })
        if (localSlides) {
            const newSlides = localSlides.slideshare_Slide.concat(newData?.slideshare_Slide)
            setLocalSlides({
                ...data,
                slideshare_Slide: newSlides
            })
            setOffset(offset + 10)
        }
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