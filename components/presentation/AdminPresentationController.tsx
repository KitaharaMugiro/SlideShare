import { Button, Stack } from "@mui/material";
import React from "react";
import useSlideRecorder from "../../model/util-hooks/useSlideRecorder";
import MuteButton from "../common/MuteButton";

interface Props {
    onClickStartRecord: () => void;
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

    const renderTime = () => {
        if (props.confirmedRecording) {
            const mm = ('00' + props.minutes).slice(-2);
            const ss = ('00' + props.seconds).slice(-2);
            return <span style={{ color: "white", lineHeight: 2.3 }}>{`録音中  ${mm}:${ss}`}</span>;
        }
        return undefined;
    }

    return <>
        <Stack direction="row" spacing={2}>
            <MuteButton />
            {renderTime() || <Button onClick={props.onClickStartRecord}>登壇を録音する</Button>}
            <Button color="warning" variant="outlined" onClick={onFinishPresentation}>登壇を終了する</Button>
        </Stack>
    </>
}

