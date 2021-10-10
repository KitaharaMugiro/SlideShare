import { Button } from "@mui/material"
import React, { useState } from "react"
import { usePageList } from "../../../model/jotai/FocusedPageId"
import style from "./ImagePreview.module.css"

interface Props {
    imageUrl: string
}

export default (props: Props) => {
    //TODO: ここをもっとマシにして
    const [customizeWidth, setWidth] = useState(750)
    const width = customizeWidth + "px"
    const height = (customizeWidth / 16 * 9) + "px"
    const sizeStyle = { width, height }
    const imageSizeStyle = { width, height, backgroundSize: `${width} ${height}` }

    const { focusedPage, removePage } = usePageList()
    if (!focusedPage) return <div />
    const onClickDelete = () => {
        removePage(focusedPage?.pageId)
    }

    return <>
        <div className={style.paper} style={sizeStyle} >
            <div
                className={style.picture}
                style={{ backgroundImage: `url("${props.imageUrl}")`, ...imageSizeStyle }}
            />
        </div>

    </>
}