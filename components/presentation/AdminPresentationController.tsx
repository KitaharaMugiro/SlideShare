import { Button, FormControlLabel, Stack, Switch, Typography } from "@mui/material"
import React from "react"
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import { useAtom } from "jotai";
import { TrackStateAtom } from "../../model/jotai/TrackState";
import { SlideStateAtom } from "../../model/jotai/SlideState";

interface Props {

}

export default (props: Props) => {
    const [audioState, setAudioState] = useAtom(TrackStateAtom)
    const onClickAudioTrackChange = () => {
        setAudioState({ ...audioState, audio: !audioState.audio })
    }
    const [slideState, setSlideState] = useAtom(SlideStateAtom)
    const onClickEnableCursorChange = () => {
        setSlideState({ ...slideState, cursor: !slideState.cursor })
    }
    return <>
        <Stack direction="row" spacing={2}>
            {audioState.audio ?
                <Button startIcon={<MicIcon />} onClick={onClickAudioTrackChange}>ミュート</Button>
                : <Button startIcon={<MicOffIcon />} onClick={onClickAudioTrackChange}>ミュート解除</Button>
            }
            <FormControlLabel control={<Switch checked={slideState.cursor} onChange={onClickEnableCursorChange} />} label="カーソル" style={{ color: "white" }} />

        </Stack>
    </>
}