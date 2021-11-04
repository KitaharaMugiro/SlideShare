import { useState, useEffect } from "react"
import { Page } from "../../../model/Page"

interface Props {
    page: Page
    width: number
    height: number
}

export default (props: Props) => {
    let idPart = undefined
    const splittedUrl = props.page.videoUrl?.split("/")
    if (splittedUrl) {
        if (splittedUrl.length !== 1) {
            idPart = splittedUrl[splittedUrl.length - 1]
        }
    }

    return <>
        <iframe
            src={`https://docs.google.com/forms/d/e/${idPart}/viewform?embedded=true`}
            width={props.width} height={props.height}
            frameBorder="0" marginHeight={0} marginWidth={0}>読み込んでいます…</iframe>
    </>
}