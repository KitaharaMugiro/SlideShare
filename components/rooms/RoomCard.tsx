import { Button, Card, CardActions, CardHeader } from "@mui/material";
import React from "react";
import { Room } from "../../model/Room";
import useUser from "../../model/util-hooks/useUser";
import AgoraClient from "../slide/AgoraClient";
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

    const { user, tempUserId } = useUser()




    const participantsView = (
        <div>
            <RoomParticipants participants={props.room.participants} />
        </div>
    );

    const renderAgora = () => {
        if (props.joined && props.room) {
            if (user) {
                return < AgoraClient
                    uid={user.attributes.sub}
                    host={props.room.createdBy}
                    channelName={`room-${props.room.id}`}
                    isHost={true}
                    onClickLeave={props.onClickLeave} />
            } else {
                return < AgoraClient
                    uid={tempUserId}
                    host={props.room.createdBy}
                    channelName={`room-${props.room.id}`}
                    isHost={false}
                    onClickLeave={props.onClickLeave} />
            }
        }

        return <div />
    }

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
                {renderAgora()}
            </CardActions>
        </Card>
    );

}