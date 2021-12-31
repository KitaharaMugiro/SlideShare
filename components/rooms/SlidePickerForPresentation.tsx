import { Paper } from "@mui/material";
import React from "react";
import { useRoomMutation } from "../../model/hooks/useRoom";
import PlusSlideCard from "../common/PlusSlideCard";
import SlideCard from "../slide/SlideCard";

interface Props {
    slides: {
        userName: string,
        slideId: number,
        imageUrl: string | null | undefined
    }[],
    roomId: number,
    presentingSlideId: number | undefined
    role: "owner" | "participant" | "public" | "none"
    onClickAdd: () => void
}

export default (props: Props) => {
    const { updatePresentingSlide } = useRoomMutation()
    const onClickPick = async (slideId: number) => {
        await updatePresentingSlide(props.roomId, slideId)
    }

    const onWithdrawPresentation = async () => {
        if (props.roomId) {
            await updatePresentingSlide(props.roomId, null)
        }
    }

    const renderCards = () => {
        return props.slides.map((slide) => {
            return <div key={slide.slideId} style={{
                marginLeft: 10
            }}>
                <SlideCard
                    slideId={slide.slideId}
                    imageUrl={slide.imageUrl}
                    actionMode={props.role === "owner" ? "presenting-owner" : "none"}
                    linkTo="presentation"
                    onDeleteCard={onWithdrawPresentation}
                    onClickPick={onClickPick}
                    isFocus={props.presentingSlideId === slide.slideId}
                    uploading={false} />
            </div>
        })
    }

    return <Paper elevation={0}>
        <div style={{ display: "flex", overflowX: "scroll", padding: 10 }}>
            <PlusSlideCard onClick={props.onClickAdd} />
            {renderCards()}
        </div>
    </Paper>;
}