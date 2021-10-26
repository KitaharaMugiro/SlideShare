import { Typography, Button } from "@mui/material"
import React from "react"
import style from "./Dragzone.module.css"

interface Props {
    isDragActive: boolean
    type: "PDF" | "Image" | "Files"
}
export default (props: Props) => {
    let text = ""
    if (props.type === "PDF") {
        text = "Drag 'n' drop a PDF here"
    } else if (props.type === "Image") {
        text = "Drag 'n' drop a Image or GIF file here"
    } else if (props.type === "Files") {
        text = "Drag 'n' drop files here"
    }

    return <>
        <div className={style.container}>
            <div className={style.text}>
                {props.isDragActive ? (
                    <Typography align="center">Drop the files here ...</Typography>
                ) : (
                    <Typography align="center">
                        {text}, or click to <Button variant="outlined">Select File</Button>
                    </Typography>
                )}

            </div>
        </div>
    </>
}