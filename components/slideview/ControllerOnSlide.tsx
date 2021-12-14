import { IconButton } from "@mui/material"
import React, { useState } from "react"
import style from "./slideview.module.css"
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SettingsIcon from '@mui/icons-material/Settings';
interface Props {
    appear: boolean
    onClickFullScreen: () => void
}

export default (props: Props) => {



    return (
        <div
            className={style.controller_on_slide}
            style={{
                //transform: props.appear ? "translateY(0px)" : "translateY(80px)",
                opacity: props.appear ? 1 : 0
            }}
        >
            <IconButton
                onClick={props.onClickFullScreen}
                style={{ position: "absolute", right: 10, height: 60 }}>
                <FullscreenIcon style={{ width: 30, height: 30 }} />
            </IconButton>
        </div>
    )
}