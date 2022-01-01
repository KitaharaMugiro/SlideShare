import { Button, Card, CardActions, CardHeader } from "@mui/material";
import React from "react";
import { Room } from "../../model/Room";
import RoomCardMenu from "./RoomCardMenu";
import RoomParticipants from "./RoomParticipants";
interface Props {
    joined: boolean
    room: Room
    role: "owner" | "participant" | "public" | "none"
    onClickJoin: (id: number) => void
    onClickLeave: () => void
}

export default (props: Props) => {

    const participantsView = (
        <div>
            <RoomParticipants participants={props.room.participants} />
        </div>
    );

    return (
        <Card style={{ width: 330 }} sx={{ borderRadius: 4 }}>
            <CardHeader
                title={props.room.name}
                subheader={props.room.description}
                action={
                    <RoomCardMenu
                        roomId={props.room.id}
                        isOwner={props.role === "owner"} />
                }
            />
            <CardActions>
                {participantsView || <div />}
                {!props.joined ? <Button size="small" onClick={() => props.onClickJoin(props.room.id)}>JOIN</Button> : <div />}
            </CardActions>
        </Card>
    );

}