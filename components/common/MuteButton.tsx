import { useAtom } from "jotai"
import { useTranslations } from "next-intl"
import React from "react"
import { TrackStateAtom } from "../../model/jotai/TrackState"
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import { Button, IconButton } from "@mui/material";

interface Props {
    noText?: boolean
}

export default (props: Props) => {
    const t = useTranslations("Presentation")
    const [audioState, setAudioState] = useAtom(TrackStateAtom)
    const onClickAudioTrackChange = () => {
        setAudioState({ ...audioState, audio: !audioState.audio })
    }

    if (props.noText) {
        return (
            <div>
                {
                    audioState.audio ?
                        <IconButton onClick={onClickAudioTrackChange}><MicIcon /></IconButton>
                        : <IconButton onClick={onClickAudioTrackChange}><MicOffIcon /></IconButton>
                }
            </div>
        )
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