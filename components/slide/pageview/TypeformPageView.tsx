import React from "react";
import { Page } from "../../../model/Page";
import { Widget } from '@typeform/embed-react'

interface Props {
    page: Page
    width: number
    height: number
}

export default (props: Props) => {
    let idPart: string | undefined = undefined
    const splittedUrl = props.page.videoUrl?.split("/")
    if (splittedUrl) {
        if (splittedUrl.length !== 1) {
            idPart = splittedUrl[splittedUrl.length - 1]
        }
    } else {
        return <div />
    }

    return (
        <Widget id={idPart || ""} style={{ width: props.width, height: props.height }} />
    )
}