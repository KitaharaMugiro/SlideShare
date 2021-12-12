import { Button, Stack } from "@mui/material";
import React from "react";
import useSlideRecorder from "../../model/util-hooks/useSlideRecorder";
import MuteButton from "../common/MuteButton";

interface Props {
    onClickStartRecord: () => void;
    onFinishPresentation: () => void;
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
            <Button onClick={props.onClickStartRecord}>登壇を録音する</Button>
            <Button color="warning" variant="outlined" onClick={onFinishPresentation}>登壇を終了する</Button>
        </Stack>
    </>
}

