import { Button, FormControlLabel, Stack, Switch, Typography } from "@mui/material"
import React from "react"
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import { useAtom } from "jotai";
import { TrackStateAtom } from "../../model/jotai/TrackState";
import { SlideStateAtom } from "../../model/jotai/SlideState";
import { useTranslations } from "use-intl";

interface Props {

}

export default (props: Props) => {
    const t = useTranslations("Presentation")
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
                <Button startIcon={<MicIcon />} onClick={onClickAudioTrackChange}>{t("mute")}</Button>
                : <Button startIcon={<MicOffIcon />} onClick={onClickAudioTrackChange}>{t("unmute")}</Button>
            }
            {/* <FormControlLabel control={<Switch checked={slideState.cursor} onChange={onClickEnableCursorChange} />} label={t("cursor")} style={{ color: "white" }} /> */}

        </Stack>
    </>
}