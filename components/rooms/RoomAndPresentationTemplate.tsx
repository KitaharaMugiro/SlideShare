
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { IconButton, Paper } from "@mui/material";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
import { HEADER_HEIGHT } from "../../config/StyleConst";
import useRoom, { useRoomParticipantMutation } from "../../model/hooks/useRoom";
import { DarkModeAtom } from '../../model/jotai/DarkMode';
import { MyRoomState } from "../../model/Room";
import useUser from "../../model/util-hooks/useUser";
import MuteButton from "../common/MuteButton";
import PresentationForRoomTemplate from '../presentation/PresentationForRoomTemplate';
import style from "./room.module.css";
import RoomListTemplate from './RoomListTemplate';
import RoomSwipableDrawer from "./RoomSwipableDrawer";
import { useAtom } from 'jotai'
export default () => {
    const router = useRouter()
    const { roomId } = router.query
    const { rooms } = useRoom()
    const { joinRoom } = useRoomParticipantMutation()
    const { user } = useUser()
    const [_, setThemeMode] = useAtom(DarkModeAtom)

    const [openDrawer, setOpenDrawer] = useState(false)
    const [state, setState] = useState<MyRoomState>({ participatedRoomId: undefined, role: "none" });
    const joinedRoom = rooms.find(room => room.id === state.participatedRoomId)
    const isPresenting = joinedRoom?.presentingSlide?.slideId !== undefined

    const onClickJoin = async (roomId: number) => {
        console.log("<DEBUG> onClickJoin: ", roomId)
        if (user) {
            console.log("userがあるのでownerかparticipant")
            await joinRoom(roomId)
            const joinedRoom = rooms.find(room => room.id === roomId)
            const isRoomAdmin = joinedRoom?.createdBy === user?.attributes.sub
            setState({ participatedRoomId: roomId, role: isRoomAdmin ? "owner" : "participant" });
        } else {
            console.log("userがないのでpublic")
            setState({ participatedRoomId: roomId, role: "public" });
        }
        router.replace(router.pathname, { query: { roomId } }, { shallow: true });
        setOpenDrawer(true)
    }

    const onClickLeave = async () => {
        if (user) {
            await joinRoom(undefined)
        }
        setState({ participatedRoomId: undefined, role: "none" });
        router.replace(router.pathname, undefined, { shallow: true });
        setOpenDrawer(false)
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

    useEffect(() => {
        if (isPresenting) {
            setThemeMode("dark")
        } else {
            setThemeMode("light")
        }
    }, [isPresenting])



    useEffect(() => {
        if (roomId && rooms) {
            onClickJoin(Number(roomId))
        }

    }, [roomId, user, rooms])


    let drawerWidth = "45%"
    if (isMobile) {
        drawerWidth = "80%"
    }

    return (
        <>
            <RoomSwipableDrawer
                role={state.role}
                drawerWidth={drawerWidth}
                joinedRoom={joinedRoom}
                open={openDrawer}
                onClickLeave={onClickLeave}
                onOpen={() => setOpenDrawer(true)}
                onClose={() => setOpenDrawer(false)} />

            <div className={style.root} style={{ marginRight: (!isPresenting && openDrawer) ? drawerWidth : "" }}>

                {isPresenting ?
                    <PresentationForRoomTemplate
                        room={joinedRoom}
                        slideId={joinedRoom?.presentingSlide?.slideId || undefined}
                    />
                    :
                    <RoomListTemplate
                        rooms={rooms}
                        roomState={state}
                        onClickJoin={onClickJoin}
                        onClickLeave={onClickLeave} />
                }


                {/* Drawer閉じているときの横のバー */}
                <Paper style={{
                    position: "absolute",
                    height: "100%", width: 50, right: 0, top: HEADER_HEIGHT,
                    bottom: 0,
                    paddingTop: 20,
                    zIndex: 0
                }}>
                    <IconButton
                        onClick={() => setOpenDrawer(true)}>
                        <MenuOpenIcon />
                    </IconButton>
                    <MuteButton noText={true} />
                    {joinedRoom ?
                        <IconButton
                            onClick={() => onClickLeave()}>
                            👋
                        </IconButton> : <div />}
                </Paper>
            </div>

        </>
    )
}