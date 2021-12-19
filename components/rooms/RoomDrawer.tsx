import { Button, Chip, Divider, Drawer, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { useState } from "react"
import { useRoomMutation } from "../../model/hooks/useRoom"
import { Room } from "../../model/Room"
import useSignin from "../../model/util-hooks/useSignin"
import useUser from "../../model/util-hooks/useUser"
import MuteButton from "../common/MuteButton"
import SlideCard from "../slide/SlideCard"
import RoomParticipants from "./RoomParticipants"
import SlidePicker from "./SlidePicker"
import SlidePickerForPresentation from "./SlidePickerForPresentation"

interface Props {
    drawerWidth: any,
    joinedRoom: Room | undefined
    role: "owner" | "participant" | "public" | "none"
}

export default (props: Props) => {
    const { user } = useUser()
    const { drawerWidth } = props
    const { goSignin } = useSignin()
    const [openBottom, setOpenBottom] = useState(false)
    const bottomViewHeight = openBottom ? 300 : 90

    const StatusChip = () => {
        if (props.joinedRoom?.status === "open") {
            return <Chip label="登壇中" color="primary" />
        } else if (props.joinedRoom?.status === "waiting") {
            return <Chip label="待機中" color="secondary" />
        } else if (props.joinedRoom?.status === "closed") {
            return <Chip label="終了" color="warning" />
        }
    }

    const renderMuteButton = () => {
        if (props.joinedRoom) {
            if (props.role === "owner" || props.role === "participant") {
                return <MuteButton />
            } else if (props.role === "public") {
                return <Button color="error" onClick={goSignin}>話すにはログインが必要です</Button>
            }
        }
    }

    const { updatePresentingSlide } = useRoomMutation()
    const router = useRouter()

    const onWithdrawPresentation = async () => {
        if (props.joinedRoom) {
            await updatePresentingSlide(props.joinedRoom.id, null)
        }

    }

    const onGoingPresentation = async (slideId: number) => {
        if (props.joinedRoom) {
            router.push(`presentation/${slideId}?roomId=${props.joinedRoom.id}`)
        }
    }

    const renderPresentingSlide = () => {
        if (props.joinedRoom?.presentingSlide) {
            const slide = props.joinedRoom.presentingSlide;
            return <>
                <Typography variant="h5">登壇中のスライド</Typography>
                <div style={{ marginLeft: 15, marginBottom: 20 }}>

                    <SlideCard
                        slideId={slide.slideId}
                        imageUrl={slide.slideImageUrl}
                        actionMode={props.role === "owner" ? "presenting-owner" : "presenting-participant"}
                        onDeleteCard={onWithdrawPresentation}
                        onClickPick={onGoingPresentation}
                        linkTo="presentation"
                        isFocus={true} />
                </div>
            </>
        }
    }

    const renderSlides = () => {
        if (!props.joinedRoom) return <div />
        const slides: { userName: string, slideId: number, imageUrl: string | null | undefined }[] = props.joinedRoom.participants.filter(p => p.slideId).map(p => {
            return {
                userName: p.name,
                slideId: p.slideId!,
                imageUrl: p.slideImageUrl
            }
        })
        return (<div style={{ marginLeft: 15 }}>
            <SlidePickerForPresentation
                onClickAdd={onClickAddParticipantSlide}
                slides={slides}
                roomId={props.joinedRoom.id}
                role={props.role} />
        </div>)
    }

    const onClickAddParticipantSlide = () => {
        setOpenBottom(!openBottom)
    }

    return <>
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                },
            }}
            variant="persistent"
            anchor="right"
            open={props.joinedRoom !== undefined}
        >
            <div style={{ padding: 10, paddingTop: 20 }}>
                {StatusChip()}
                <Typography variant="h4">{props.joinedRoom?.name}</Typography>
                <Typography variant="caption">{props.joinedRoom?.description}</Typography>

                {renderPresentingSlide()}
                <Typography variant="h5">登壇予定のスライド</Typography>
                {renderSlides()}
                <div style={{ height: bottomViewHeight }} />
                <>
                    <div style={{
                        position: "fixed",
                        bottom: "0",
                        width: drawerWidth,
                        height: bottomViewHeight,
                        backgroundColor: "white"
                    }}>
                        <Divider />
                        {renderMuteButton()}
                        {openBottom ? <SlidePicker /> : <div />}
                    </div>
                </>

            </div>

        </Drawer>
    </>
}