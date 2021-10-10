import { Typography } from "@mui/material"
import React from "react"
import { usePageList } from "../../../model/jotai/FocusedPageId"
import { PageType } from "../../../model/Page"
import MenuButton from "./MenuButton"

export default () => {
    const { focusedPage, updatePage } = usePageList()

    if (!focusedPage) return <div />
    const onClick = (type: PageType) => {
        focusedPage.type = type
        updatePage(focusedPage)
    }

    return <>
        <div style={{ width: 400 }}>
            <Typography variant="h4" align="center">Pick one below</Typography>
            <MenuButton
                onClick={() => onClick("text")}
                imageUrl="static/page_select/text.png" title="Text" description="You can write markdown text" />
            <div style={{ height: 5 }} />
            <MenuButton
                onClick={() => onClick("image")}
                imageUrl="static/page_select/image.png" title="Image/Gif" description="Upload your image or embed with a link" />
            <div style={{ height: 5 }} />
            <MenuButton
                onClick={() => onClick("video")}
                imageUrl="static/page_select/video.png" title="Youtube" description="Embed with youtube link" />
        </div>
    </>
}