import { Typography } from "@mui/material"
import useRoomSetModal from "../../model/util-hooks/useRoomSetModal"
import RoomCard from "./RoomCard"
import style from "./room.module.css";
import { MyRoomState, Room } from "../../model/Room";
interface Props {
    rooms: Room[]
    roomState: MyRoomState
    onClickJoin: (roomId: number) => void
    onClickLeave: () => void
}
export default (props: Props) => {

    const { button, modal } = useRoomSetModal()

    return (
        <div>
            <div>
                {button}
            </div>
            {modal}

            <Typography variant="h3">🎷 Broadcasting Now</Typography>
            <div className={style.card_list}>
                {props.rooms.map(room => (
                    <div className={style.card} key={room.id}>
                        <RoomCard
                            room={room}
                            onClickJoin={props.onClickJoin}
                            onClickLeave={props.onClickLeave}
                            role={props.roomState.role}
                            joined={props.roomState.participatedRoomId === room.id} />
                    </div>
                ))}
            </div>

        </div>
    )
}