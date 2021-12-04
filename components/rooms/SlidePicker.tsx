import { Button } from "@mui/material";
import React from "react";
import { useRoomParticipantMutation } from "../../model/hooks/useRoom";
import useMySlidePagenation from "../../model/util-hooks/useMySlidePagenation";
import SlideCard from "../slide/SlideCard";

export default () => {
    const [focusedSlideId, setFocusedSlideId] = React.useState<number | null>(null);
    const { localSlides, loadMore } = useMySlidePagenation()
    const { updatePresentingSlide } = useRoomParticipantMutation()

    const onClickPick = async (slideId: number) => {
        await updatePresentingSlide(slideId)
        setFocusedSlideId(slideId)
    }

    const renderCards = () => {
        return localSlides?.slideshare_Slide.map((slide) => {
            const isFocus = focusedSlideId === slide.id
            return <div key={slide.id} style={{
                margin: 10,
                border: isFocus ? "1px solid rgba(81, 203, 238, 1)" : "",
                boxShadow: isFocus ? "0 0 5px rgba(81, 203, 238, 1)" : ""
            }}>
                <SlideCard
                    slideId={slide.id}
                    imageUrl={slide.Pages ? slide.Pages[0]?.imageUrl : undefined}
                    actionMode="pick"
                    linkTo="presentation"
                    onClickPick={onClickPick} />
            </div>
        })
    }

    return <div style={{ backgroundColor: "white" }}>
        <div style={{ display: "flex", overflowX: "scroll" }}>
            {renderCards()}
        </div>
        <Button onClick={loadMore}>さらに読み込む</Button>
    </div>;
}