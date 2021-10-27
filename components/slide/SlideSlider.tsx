import { Button, Slider } from "@mui/material"
import React from "react"

interface Props {
    pageNumber: number
    maxPageNumber: number
    onChangePageNumber: (pageNumber: number) => void
    isSync: boolean
    syncSlide?: () => void
}

export default (props: Props) => {
    const handleChange = (event: Event, newValue: number | number[]) => {
        props.onChangePageNumber(newValue as number);
    }
    return <>
        <Slider
            onChange={handleChange}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={props.maxPageNumber - 1}
            value={props.pageNumber}
            color={props.isSync ? "secondary" : "primary"}
        />
        {!props.isSync && props.syncSlide ? <Button onClick={props.syncSlide}>発表者と同じスライドへ移動</Button> : <div />}
    </>
}