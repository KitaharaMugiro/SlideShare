import React, { useState } from "react"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu, MenuItem } from "@mui/material";
import useRoomSetModal from "../../model/util-hooks/useRoomSetModal";
import { useRoomMutation } from "../../model/hooks/useRoom";

interface Props {
    roomId: number;
    isOwner: boolean;
}

export default (props: Props) => {
    const [anchorEl, setAnchorEl] = useState<any>(null);
    const { modal, setOpenDialog } = useRoomSetModal(props.roomId)
    const { deleteRoom } = useRoomMutation()

    const onClickTitleChange = () => {
        setAnchorEl(null)
        setOpenDialog(true)
    }

    const onClickDelete = async () => {
        setAnchorEl(null)
        if (window.confirm("Are you sure you want to delete this room?")) {
            await deleteRoom(props.roomId)
        }
    }

    const roomOwnerMenu = () => {
        return <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}>
            <MenuItem disabled={!props.isOwner} onClick={onClickTitleChange}>タイトル変更</MenuItem>
            <MenuItem disabled={!props.isOwner} onClick={onClickDelete}>削除</MenuItem>

        </Menu>

    }

    return <>
        <IconButton aria-label="settings">
            <MoreVertIcon onClick={(event) => setAnchorEl(event.currentTarget)} />
        </IconButton>
        {modal}
        {roomOwnerMenu()}
    </>
}