import { Typography } from "@mui/material"
import React from "react"
import { usePageList } from "../../../model/hooks/usePageList"
import { Slideshare_PageType_Enum } from "../../../src/generated/graphql"
import MenuButton from "./MenuButton"

export default () => {
    const { focusedPage, updatePage } = usePageList()

    if (!focusedPage) return <div />
    const onClick = (type: Slideshare_PageType_Enum) => {
        focusedPage.type = type
        updatePage(focusedPage)
    }

    return <>
        <div style={{ width: 400 }}>
            <Typography variant="h4" align="center">Pick one below</Typography>
            <MenuButton
                onClick={() => onClick(Slideshare_PageType_Enum.Text)}
                imageUrl="/static/page_select/text.png" title="Text" description="You can write markdown text" />
            <div style={{ height: 5 }} />
            <MenuButton
                onClick={() => onClick(Slideshare_PageType_Enum.Image)}
                imageUrl="/static/page_select/image.png" title="Image/Gif" description="Upload your image or embed with a link" />
            <div style={{ height: 5 }} />
            <MenuButton
                onClick={() => onClick(Slideshare_PageType_Enum.Video)}
                imageUrl="/static/page_select/video.png" title="Youtube" description="Embed with youtube link" />
        </div>
    </>
}