
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

    const [state, setState] = useState<MyRoomState>({ participatedRoomId: undefined, role: "none" });
    const joinedRoom = rooms.find(room => room.id === state.participatedRoomId)

    const onClickJoin = async (roomId: number) => {
        if (user) {
            await joinRoom(roomId)
            const joinedRoom = rooms.find(room => room.id === roomId)
            const isRoomAdmin = joinedRoom?.createdBy === user?.attributes.sub
            setState({ participatedRoomId: roomId, role: isRoomAdmin ? "owner" : "participant" });
        } else {
            setState({ participatedRoomId: roomId, role: "public" });
        }
        router.replace(router.pathname, { query: { roomId } }, { shallow: true });
    }


    useEffect(() => {
        const time = 1000 * 60 * 20 //20min
        const interval = setInterval(async () => {
            if (joinedRoom) {
                await joinRoom(joinedRoom.id);
            }
        }, time);
        return () => {
            clearInterval(interval);
        };
    }, [joinedRoom]);

    const onClickLeave = async () => {
        if (user) {
            await joinRoom(undefined)
        }
        setState({ participatedRoomId: undefined, role: "none" });
        router.replace(router.pathname, undefined, { shallow: true });
    }

    useEffect(() => {
        if (roomId) {
            onClickJoin(Number(roomId))
        }

    }, [roomId, user])

    const { button, modal } = useRoomSetModal()

    return (
        <div className={style.root}>
            {button}
            {modal}
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

            {(joinedRoom && user) &&
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