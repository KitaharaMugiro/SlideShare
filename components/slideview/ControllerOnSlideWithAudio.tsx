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
    playing: boolean
    onClickPlay: () => void
    onClickPause: () => void
    duration: number
    seek: number
}

export default (props: Props) => {

    const onClickPlayOrPause = () => {
        if (props.playing) {
            props.onClickPause()
        } else {
            props.onClickPlay()
        }
    }

    const renderIfAudioExists = () => {
        const seekMinutes = Math.round(props.seek / 60)
        const seekSeconds = props.seek - seekMinutes * 60
        const seekMM = seekMinutes
        const seekSS = ("00" + seekSeconds).slice(-2)
        const durationMinutes = Math.round(props.duration / 60)
        const durationSeconds = props.duration - durationMinutes * 60
        const durationMM = durationMinutes
        const durationSS = ("00" + durationSeconds).slice(-2)
        return (
            <div>
                <IconButton
                    onClick={onClickPlayOrPause}
                    style={{ marginLeft: 10, height: 60 }}>
                    {props.playing ?
                        <PauseIcon style={{ width: 40, height: 40 }} /> :
                        <PlayArrowIcon style={{ width: 40, height: 40 }} />}
                </IconButton>
                {/* <IconButton
                onClick={undefined}
                style={{ marginLeft: 0, height: 60 }}>
                <SettingsIcon style={{ width: 30, height: 30 }} />
            </IconButton> */}


                <span style={{ marginLeft: 10, color: "white" }}>
                    {seekMM}:{seekSS} / {durationMM}:{durationSS}
                </span>
            </div>
        )
    }

    return (
        <div
            className={style.controller_on_slide}
            style={{
                //transform: props.appear ? "translateY(0px)" : "translateY(80px)",
                opacity: props.appear ? 1 : 0
            }}
        >
            {renderIfAudioExists()}
            <IconButton
                onClick={props.onClickFullScreen}
                style={{ position: "absolute", right: 10, height: 60 }}>
                <FullscreenIcon style={{ width: 30, height: 30 }} />
            </IconButton>
        </div>
    )
}