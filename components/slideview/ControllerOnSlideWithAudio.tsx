import { Button, IconButton, Menu, MenuItem } from "@mui/material"
import React, { useState } from "react"
import style from "./slideview.module.css"
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SettingsIcon from '@mui/icons-material/Settings';
import Forward5Icon from '@mui/icons-material/Forward5';
import Replay5Icon from '@mui/icons-material/Replay5';
import { Replay5 } from "@mui/icons-material";
interface Props {
    appear: boolean
    onClickFullScreen: () => void
    playing: boolean
    onClickPlay: () => void
    onClickPause: () => void
    onClickChangeRate: (rate: number) => void
    onClickForwardOrBack: (second: number) => void
    currentRate: number
    duration: number
    seek: number
}

export default (props: Props) => {
    /* 再生速度メニュー周り */
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const renderAudioRateChange = () => {
        const open = Boolean(anchorEl);
        const handleClick = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };
        const onClickChangeRate = (r: number) => {
            props.onClickChangeRate(r)
            setAnchorEl(null);
        }
        const rateOptions = [0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0]
        return (
            <>
                <IconButton
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    style={{ marginLeft: 0, height: 30 }}>
                    {/* <SettingsIcon style={{ width: 20, height: 20 }} /> */}
                    <span style={{ fontSize: 15 }}>×{props.currentRate}</span>
                </IconButton>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    {rateOptions.map(r => {
                        return <MenuItem key={r} onClick={() => onClickChangeRate(r)}>×{r}</MenuItem>
                    })}
                </Menu>

            </>
        )
    }

    const onClickPlayOrPause = () => {
        if (props.playing) {
            props.onClickPause()
        } else {
            props.onClickPlay()
        }
    }

    const renderIfAudioExists = () => {
        const seekMinutes = Math.floor(props.seek / 60)
        const seekSeconds = props.seek - seekMinutes * 60
        const seekMM = seekMinutes
        const seekSS = ("00" + seekSeconds).slice(-2)
        const durationMinutes = Math.floor(props.duration / 60)
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
                {renderAudioRateChange()}
                <IconButton
                    onClick={() => props.onClickForwardOrBack(-5)}
                    style={{ marginLeft: 10, height: 60 }}>
                    <Replay5Icon style={{ width: 40, height: 40 }} />
                </IconButton>
                <IconButton
                    onClick={() => props.onClickForwardOrBack(5)}
                    style={{ marginLeft: 10, height: 60 }}>
                    <Forward5Icon style={{ width: 40, height: 40 }} />
                </IconButton>
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