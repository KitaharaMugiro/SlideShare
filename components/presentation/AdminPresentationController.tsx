import { Button, Stack } from "@mui/material";
import React from "react";
import useSlideRecorder from "../../model/util-hooks/useSlideRecorder";
import MuteButton from "../common/MuteButton";

interface Props {
    onFinishPresentation: () => void;
    confirmedRecording?: boolean;
    minutes?: number;
    seconds?: number;
}

export default (props: Props) => {
    const onFinishPresentation = () => {
        if (window.confirm("Are you sure you want to finish the presentation?")) {
            props.onFinishPresentation();
        }
    }

    return <>
        <Stack direction="row" spacing={2}>
            <MuteButton />
            <Button color="warning" variant="outlined" onClick={onFinishPresentation}>登壇を終了する</Button>
        </Stack>
    </>
}

