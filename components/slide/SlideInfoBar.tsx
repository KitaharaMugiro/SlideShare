import { Stack } from "@mui/material"
import React from "react"

interface Props {
    viewerNumber: number
}
export default (props: Props) => {
    return <>
        <Stack direction="row" spacing={2}>
            視聴者数: {props.viewerNumber}人
        </Stack>
    </>
}