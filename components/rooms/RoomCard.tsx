import { Button, Card, CardActions, CardHeader, IconButton } from "@mui/material";
import React from "react";
import { Room } from "../../model/Room";
import MuteButton from "../common/MuteButton";
import RoomParticipants from "./RoomParticipants";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SlidePickerForPresentation from "./SlidePickerForPresentation";
import SlideCard from "../slide/SlideCard";
import { useRoomMutation } from "../../model/hooks/useRoom";
import { Router, useRouter } from "next/dist/client/router";
import AgoraClient from "../slide/AgoraClient";
import useUser from "../../model/util-hooks/useUser";
interface Props {
    joined: boolean
    room: Room
    role: "owner" | "participant"
    onClickJoin: (id: number) => void
    onClickLeave: () => void
}

export default (props: Props) => {
    const router = useRouter()
    const { user } = useUser()
    const { updatePresentingSlide } = useRoomMutation()

    const onWithdrawPresentation = async () => {
        await updatePresentingSlide(props.room.id, null)
    }

    const onGoingPresentation = async (slideId: number) => {
        router.push(`presentation/${slideId}?roomId=${props.room.id}`)
    }


    const renderSlides = () => {
        if (props.room.presentingSlide) {
            const slide = props.room.presentingSlide;
            return <div style={{ marginLeft: 15 }}>
                <SlideCard
                    slideId={slide.slideId}
                    imageUrl={slide.slideImageUrl}
                    actionMode={props.role === "participant" ? "presenting-participant" : "presenting-owner"}
                    onDeleteCard={onWithdrawPresentation}
                    onClickPick={onGoingPresentation}
                    linkTo="presentation" />
            </div>
        }
        if (!props.joined) return <div />
        const slides: { userName: string, slideId: number, imageUrl: string | null | undefined }[] = props.room.participants.filter(p => p.slideId).map(p => {
            return {
                userName: p.name,
                slideId: p.slideId!,
                imageUrl: p.slideImageUrl
            }
        })
        return (<div>
            <SlidePickerForPresentation
                slides={slides}
                roomId={props.room.id}
                role={props.role} />
        </div>)
    }

    const participantsView = (
        <div>
            <RoomParticipants participants={props.room.participants} />
        </div>
    );

    return (
        <Card style={{ width: 330 }} >
            <CardHeader
                title={props.room.name}
                subheader={props.room.description}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            {renderSlides()}
            <CardActions>
                {participantsView || <div />}
                {!props.joined ? <Button size="small" onClick={() => props.onClickJoin(props.room.id)}>JOIN</Button> : <div />}
                {props.joined && user && props.room ?
                    < AgoraClient
                        uid={user.attributes.sub}
                        host={props.room.createdBy}
                        channelName={`room-${props.room.id}`}
                        isHost={true}
                        onClickLeave={props.onClickLeave} /> : <div />}
            </CardActions>
            {props.joined ? <MuteButton /> : <div />}
        </Card>
    );

}