import { Button, Stack } from "@mui/material";
import React from "react";
import MuteButton from "../common/MuteButton";


interface Props {
    onFinishPresentation: () => void;
}

export default (props: Props) => {

    // const [slideState, setSlideState] = useAtom(SlideStateAtom)
    // const onClickEnableCursorChange = () => {
    //     setSlideState({ ...slideState, cursor: !slideState.cursor })
    // }

    const onFinishPresentation = () => {
        if (window.confirm("Are you sure you want to finish the presentation?")) {
            props.onFinishPresentation();
        }
    }

    return <>
        <Stack direction="row" spacing={2}>
            <MuteButton />
            {/* <FormControlLabel control={<Switch checked={slideState.cursor} onChange={onClickEnableCursorChange} />} label={t("cursor")} style={{ color: "white" }} /> */}
            <Button color="warning" variant="outlined" onClick={onFinishPresentation}>登壇を終了する</Button>
        </Stack>
    </>
}