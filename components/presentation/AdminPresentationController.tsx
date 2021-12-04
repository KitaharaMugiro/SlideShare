import { Stack } from "@mui/material";
import React from "react";
import MuteButton from "../common/MuteButton";


interface Props {

}

export default (props: Props) => {

    // const [slideState, setSlideState] = useAtom(SlideStateAtom)
    // const onClickEnableCursorChange = () => {
    //     setSlideState({ ...slideState, cursor: !slideState.cursor })
    // }
    return <>
        <Stack direction="row" spacing={2}>
            <MuteButton />
            {/* <FormControlLabel control={<Switch checked={slideState.cursor} onChange={onClickEnableCursorChange} />} label={t("cursor")} style={{ color: "white" }} /> */}

        </Stack>
    </>
}