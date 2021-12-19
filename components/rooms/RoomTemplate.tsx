
import { Drawer, Typography } from "@mui/material";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import useRoom, { useRoomParticipantMutation } from "../../model/hooks/useRoom";
import { MyRoomState } from "../../model/Room";
import useRoomSetModal from "../../model/util-hooks/useRoomSetModal";
import useUser from "../../model/util-hooks/useUser";
import style from "./room.module.css";
import RoomCard from "./RoomCard";
import RoomDrawer from "./RoomDrawer";
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
        console.log("<DEBUG> onClickJoin: ", roomId)
        if (user) {
            console.log("userがあるのでownerかparticipant")
            await joinRoom(roomId)
            const joinedRoom = rooms.find(room => room.id === roomId)
            const isRoomAdmin = joinedRoom?.createdBy === user?.attributes.sub
            console.log({ ownerId: joinedRoom?.createdBy, userId: user?.attributes.sub, isRoomAdmin })
            setState({ participatedRoomId: roomId, role: isRoomAdmin ? "owner" : "participant" });
        } else {
            console.log("userがないのでpublic")
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
        if (roomId && rooms) {
            onClickJoin(Number(roomId))
        }

    }, [roomId, user, rooms])

    const { button, modal } = useRoomSetModal()
    const drawerWidth = "45%" //TODO: スマホ対応
    const isJoined = state.participatedRoomId !== undefined

    return (
        <>
            <RoomDrawer role={state.role} drawerWidth={drawerWidth} joinedRoom={joinedRoom} />

            <div className={style.root} style={{ padding: 10, marginRight: isJoined ? drawerWidth : "" }}>
                <div>
                    {button}
                </div>
                {modal}

                <Typography variant="h3">🎷 Broadcasting Now</Typography>
                <div className={style.card_list}>
                    {rooms.map(room => (
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
            </div>
        </>
    )
}