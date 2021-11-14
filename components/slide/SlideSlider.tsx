import { Button, Slider } from "@mui/material"
import React from "react"
import { useTranslations } from "use-intl"

interface Props {
    pageNumber: number
    maxPageNumber: number
    onChangePageNumber: (pageNumber: number) => void
    isSync: boolean
    syncSlide?: () => void
}

export default (props: Props) => {
    const t = useTranslations("Presentation")
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
        {!props.isSync && props.syncSlide ? <Button onClick={props.syncSlide}>{t("go-to-same-slide")}</Button> : <div style={{ height: 20 }} />}
    </>
}