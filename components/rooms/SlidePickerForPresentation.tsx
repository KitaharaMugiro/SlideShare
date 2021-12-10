import { Button } from "@mui/material";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { useRoomMutation, useRoomParticipantMutation } from "../../model/hooks/useRoom";
import { Slide } from "../../model/Slide";
import useMySlidePagenation from "../../model/util-hooks/useMySlidePagenation";
import SlideCard from "../slide/SlideCard";

interface Props {
    slides: {
        userName: string,
        slideId: number,
        imageUrl: string | null | undefined
    }[],
    roomId: number,
    role: "owner" | "participant" | "public" | "none"
}

export default (props: Props) => {
    const { updatePresentingSlide } = useRoomMutation()
    const onClickPick = async (slideId: number) => {
        await updatePresentingSlide(props.roomId, slideId)
    }

    const renderCards = () => {
        return props.slides.map((slide) => {
            return <div key={slide.slideId} style={{
                margin: 10
            }}>
                <SlideCard
                    slideId={slide.slideId}
                    imageUrl={slide.imageUrl}
                    actionMode={props.role === "owner" ? "pick" : "none"}
                    linkTo="presentation"
                    onClickPick={onClickPick} />
            </div>
        })
    }

    return <div style={{ backgroundColor: "white" }}>
        <div style={{ display: "flex", overflowX: "scroll" }}>
            {renderCards()}
        </div>
    </div>;
}