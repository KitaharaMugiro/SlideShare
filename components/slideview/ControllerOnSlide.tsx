import { IconButton } from "@mui/material"
import React, { useState } from "react"
import style from "./slideview.module.css"
import FullscreenIcon from '@mui/icons-material/Fullscreen';
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
                opacity: props.appear ? 0.7 : 0
            }}
        >
            <IconButton
                onClick={props.onClickFullScreen}
                size="large" style={{ position: "absolute", right: 10, height: 30 }}>
                <FullscreenIcon />
            </IconButton>
        </div>
    )
}