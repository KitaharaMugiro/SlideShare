import { useAtom } from "jotai"
import { useTranslations } from "next-intl"
import React from "react"
import { TrackStateAtom } from "../../model/jotai/TrackState"
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import { Button } from "@mui/material";

export default () => {
    const t = useTranslations("Presentation")
    const [audioState, setAudioState] = useAtom(TrackStateAtom)
    const onClickAudioTrackChange = () => {
        setAudioState({ ...audioState, audio: !audioState.audio })
    }

    return (
        <div>
            {
                audioState.audio ?
                    <Button startIcon={<MicIcon />} onClick={onClickAudioTrackChange}>{t("mute")}</Button>
                    : <Button startIcon={<MicOffIcon />} onClick={onClickAudioTrackChange}>{t("unmute")}</Button>
            }
        </div>
    )
}