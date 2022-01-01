import CloseIcon from '@mui/icons-material/Close'
import { Button, Chip, Divider, IconButton, Paper, SwipeableDrawer, Typography } from "@mui/material"
import { useState } from "react"
import { HEADER_HEIGHT } from "../../config/StyleConst"
import { Room } from "../../model/Room"
import useSignin from "../../model/util-hooks/useSignin"
import MuteButton from "../common/MuteButton"
import SlidePicker from "./SlidePicker"
import SlidePickerForPresentation from "./SlidePickerForPresentation"
interface Props {
    drawerWidth: any,
    joinedRoom: Room | undefined
    role: "owner" | "participant" | "public" | "none"
    onClickLeave: () => void
    open: boolean
    onOpen: () => void
    onClose: () => void
}

export default (props: Props) => {
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

    const renderSlides = () => {
        if (!props.joinedRoom) return <div>ルームに入ると表示されます</div>
        const slides: { userName: string, slideId: number, imageUrl: string | null | undefined }[] = props.joinedRoom.participants.filter(p => p.slideId).map(p => {
            return {
                userName: p.name,
                slideId: p.slideId!,
                imageUrl: p.slideImageUrl
            }
        })

        return (
            <>
                <Typography variant="h5">登壇予定のスライド</Typography>
                <div style={{ marginLeft: 15 }}>
                    <SlidePickerForPresentation
                        onClickAdd={onClickAddParticipantSlide}
                        slides={slides}
                        presentingSlideId={props.joinedRoom?.presentingSlide?.slideId}
                        roomId={props.joinedRoom.id}
                        role={props.role} />
                </div>
            </>

        )
    }

    const onClickAddParticipantSlide = () => {
        setOpenBottom(!openBottom)
    }

    return <>
        <SwipeableDrawer
            sx={{
                width: props.drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: props.drawerWidth,
                    marginTop: HEADER_HEIGHT + "px",
                },
            }}
            variant="persistent"
            anchor="right"
            open={props.open}
            onOpen={props.onOpen}
            onClose={props.onClose}
        >
            <div style={{ padding: 10, paddingTop: 20 }}>
                <IconButton onClick={props.onClose}>
                    <CloseIcon />
                </IconButton>
                {StatusChip()}
                <Typography variant="h4">{props.joinedRoom?.name}</Typography>
                <Typography variant="caption">{props.joinedRoom?.description}</Typography>


                {renderSlides()}
                <div style={{ height: bottomViewHeight }} />
                <>
                    <Paper style={{
                        position: "fixed",
                        bottom: "0",
                        width: props.drawerWidth,
                        height: bottomViewHeight
                    }}>
                        <Divider />
                        <div style={{ display: "flex" }}>
                            {renderMuteButton()}
                            <Button onClick={props.onClickLeave}>👋 Leave</Button>
                        </div>
                        {openBottom ? <SlidePicker /> : <div />}
                    </Paper>
                </>

            </div>

        </SwipeableDrawer>
    </>
}