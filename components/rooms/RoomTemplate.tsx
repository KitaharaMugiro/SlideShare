
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import useRoom, { useRoomParticipantMutation } from "../../model/hooks/useRoom";
import { MyRoomState } from "../../model/Room";
import useRoomSetModal from "../../model/util-hooks/useRoomSetModal";
import useUser from "../../model/util-hooks/useUser";
import style from "./room.module.css";
import RoomCard from "./RoomCard";
import SlidePicker from "./SlidePicker";

export default () => {
    const router = useRouter()
    const { roomId } = router.query
    const { rooms } = useRoom()
    const { joinRoom } = useRoomParticipantMutation()
    const { user } = useUser()

    const [state, setState] = useState<MyRoomState>({ participatedRoomId: undefined, role: "participant" });
    const joinedRoom = rooms.find(room => room.id === state.participatedRoomId)

    const onClickJoin = async (roomId: number) => {
        await joinRoom(roomId)
        const joinedRoom = rooms.find(room => room.id === roomId)
        const isRoomAdmin = joinedRoom?.createdBy === user?.attributes.sub

        setState({ participatedRoomId: roomId, role: isRoomAdmin ? "owner" : "participant" });
    }

    const onClickLeave = async () => {
        await joinRoom(undefined)
        setState({ participatedRoomId: undefined, role: "participant" });
    }

    useEffect(() => {
        if (roomId) {
            onClickJoin(Number(roomId))
        }

    }, [roomId])

    const { button, modal } = useRoomSetModal()

    return (
        <div className={style.root}>
            {button}
            {modal}
            {/* {user && joinedRoom ?
                < AgoraClient
                    uid={user.attributes.sub}
                    host={joinedRoom.createdBy}
                    channelName={`room-${joinedRoom.id}`}
                    isHost={true} /> : <div />} */}
            <h1>発表中</h1>
            <div className={style.card_list}>
                {rooms.filter(room => room.status === "open").map(room => (
                    <div className={style.card} key={room.id}>
                        <RoomCard
                            room={room}
                            onClickJoin={onClickJoin}
                            onClickLeave={onClickLeave}
                            role={state.role}
                            joined={state.participatedRoomId === room.id} />
                    </div>
                ))}
            </div>

            <h1>待合室</h1>
            <div className={style.card_list}>
                {rooms.filter(room => room.status === "waiting").map(room => (
                    <div className={style.card} key={room.id}>
                        <RoomCard
                            room={room}
                            onClickJoin={onClickJoin}
                            onClickLeave={onClickLeave}
                            role={state.role}
                            joined={state.participatedRoomId === room.id} />
                    </div>
                ))}
            </div>

            {joinedRoom &&
                <>
                    <div style={{
                        position: "fixed",
                        bottom: "0",
                        width: "100%",
                        height: "200px"
                    }}>
                        <SlidePicker />
                    </div> <div style={{ height: "200px" }} />
                </>}

        </div>
    )
}