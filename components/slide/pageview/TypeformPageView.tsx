import React from "react";
import { Page } from "../../../model/Page";
import { Widget } from '@typeform/embed-react'

interface Props {
    page: Page
    width: number
    height: number
}

export default (props: Props) => {

    return (
        <Widget id={props.page.videoUrl || ""} style={{ width: props.width, height: props.height }} />
    )
}