import { Button, FormControlLabel, Stack, Switch, Typography } from "@mui/material"
import React from "react"
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import { useAtom } from "jotai";
import { TrackStateAtom } from "../../model/jotai/TrackState";
import { SlideStateAtom } from "../../model/jotai/SlideState";
import { useRouter } from "next/dist/client/router";

interface Props {

}

export default (props: Props) => {
    const router = useRouter()
    const { slideId } = router.query

    const goPresentation = () => {
        router.push(`/presentation/${slideId}`)
    }

    return <>
        <Stack direction="row" spacing={2}>
            <Button onClick={goPresentation}>プレゼンテーションモードで開く</Button>
        </Stack>
    </>
}