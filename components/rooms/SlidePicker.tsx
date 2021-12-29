import { Button } from "@mui/material";
import React from "react";
import { useRoomParticipantMutation } from "../../model/hooks/useRoom";
import useMySlidePagenation from "../../model/util-hooks/useMySlidePagenation";
import useMySlideSubscription from "../../model/util-hooks/useMySlideSubscription";
import SlideCard from "../slide/SlideCard";

export default () => {
    const [focusedSlideId, setFocusedSlideId] = React.useState<number | null>(null);
    const { slides, loadMore } = useMySlideSubscription(5)
    const { updatePresentingSlide } = useRoomParticipantMutation()

    const onClickPick = async (slideId: number) => {
        await updatePresentingSlide(slideId)
        setFocusedSlideId(slideId)
    }

    const renderCards = () => {
        return slides?.map((slide) => {
            const isFocus = focusedSlideId === slide.id
            return <div key={slide.id} style={{
                margin: 10,
            }}>
                <SlideCard
                    slideId={slide.id}
                    imageUrl={slide.Pages ? slide.Pages[0]?.imageUrl : undefined}
                    actionMode="pick"
                    linkTo="presentation"
                    onClickPick={onClickPick}
                    isFocus={isFocus} />
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