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
    role: "owner" | "participant" | "public" | "none"
    onClickAdd: () => void
}

export default (props: Props) => {
    const { updatePresentingSlide } = useRoomMutation()
    const onClickPick = async (slideId: number) => {
        await updatePresentingSlide(props.roomId, slideId)
    }

    const renderCards = () => {
        return props.slides.map((slide) => {
            return <div key={slide.slideId} style={{
                marginLeft: 10
            }}>
                <SlideCard
                    slideId={slide.slideId}
                    imageUrl={slide.imageUrl}
                    actionMode={props.role === "owner" ? "pick" : "none"}
                    linkTo="presentation"
                    onClickPick={onClickPick}
                    uploading={false} />
            </div>
        })
    }

    return <div style={{ backgroundColor: "white" }}>
        <div style={{ display: "flex", overflowX: "scroll", padding: 10 }}>
            <PlusSlideCard onClick={props.onClickAdd} />
            {renderCards()}
        </div>
    </div>;
}