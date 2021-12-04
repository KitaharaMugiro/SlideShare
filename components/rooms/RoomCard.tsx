import { Button, Card, CardActions, CardHeader, IconButton } from "@mui/material";
import React from "react";
import { Room } from "../../model/Room";
import MuteButton from "../common/MuteButton";
import RoomParticipants from "./RoomParticipants";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SlidePickerForPresentation from "./SlidePickerForPresentation";
interface Props {
    joined: boolean
    room: Room
    role: "owner" | "participant"
    onClickJoin: (id: number) => void
}

export default (props: Props) => {

    const renderSlides = () => {
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
            </CardActions>
            {props.joined ? <MuteButton /> : <div />}
        </Card>
    );

}