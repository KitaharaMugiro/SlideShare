import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from "react";
import { usePageList } from "../../../model/hooks/usePageList";
import MyDialog from "../../common/MyDialog";


export default () => {
    const options = ["Set Page Title", "Insert New Page", "Delete"]
    const { focusedPage, removePage, createPage, updatePage } = usePageList()

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const [openDialog, setOpenDialog] = useState(false)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (option: string) => {
        //TODO: textで判断するのではなくIDなどで判断するようにする
        if (option === "Delete") {
            if (!focusedPage) return
            removePage(focusedPage.id)
        } else if (option === "Insert New Page") {
            if (!focusedPage) return
            if (!focusedPage.slideId) {
                //TODO: 新しく作られたスライドなんかはここが引っかかるが、この状態はなくしたい
                console.warn("pageにslideIdが付与されていない")
                return
            }
            createPage(focusedPage.slideId, focusedPage.pageNumber + 1)
        } else if (option === "Set Page Title") {
            if (!focusedPage) return
            //title編集モーダルを開く
            setOpenDialog(true)
        }
        setAnchorEl(null);
    };

    const onFinishDialog = (values: { key: string, value: string }[]) => {
        setOpenDialog(false)
        if (!focusedPage) return
        const value = values.find(v => v.key === "title")
        if (!value) return
        focusedPage.title = value.value
        updatePage(focusedPage)
    }

    return (
        <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls="long-menu"
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option} onClick={() => handleClose(option)}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>

            <MyDialog
                initialValues={[{ key: "title", value: focusedPage?.title || "" }]}
                dialogTitle={"ページタイトルの設定"}
                dialogDescription={"ページ上部に表示されます"}
                open={openDialog}
                onFinishEdit={onFinishDialog}
                onClose={() => setOpenDialog(false)} />

        </div>
    );
}