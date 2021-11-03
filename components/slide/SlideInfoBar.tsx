import { Stack } from "@mui/material"
import React from "react"

interface Props {
    viewerNumber: number
}
export default (props: Props) => {
    return <>
        <Stack direction="row" spacing={2}>
            Viewer : {props.viewerNumber} people watching
        </Stack>
    </>
}