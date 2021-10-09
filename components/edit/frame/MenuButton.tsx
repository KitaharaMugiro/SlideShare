import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from "react";
import { usePageList } from "../../../model/jotai/FocusedPageId";


export default () => {
    const options = ["Delete"]
    const { focusedPage, removePage } = usePageList()

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (option: string) => {
        if (option === "Delete") {
            if (!focusedPage) return
            removePage(focusedPage.pageId)
        }
        setAnchorEl(null);
    };

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
        </div>
    );
}