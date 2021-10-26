import { Typography } from "@mui/material"
import React from "react"
import { usePageList } from "../../../model/hooks/usePageList"
import { Slideshare_PageType_Enum } from "../../../src/generated/graphql"
import MenuButton from "./MenuButton"

export default () => {
    const { focusedPage, updatePage } = usePageList()

    if (!focusedPage) return <div />
    const onClick = (type: Slideshare_PageType_Enum) => {
        //TODO: Object.assignは隠蔽したい
        const newPage = Object.assign({}, focusedPage)
        newPage.type = type
        updatePage(newPage)
    }

    return <>
        <div style={{ width: 400 }}>
            <Typography variant="h5" align="center">Add a page</Typography>
            <MenuButton
                onClick={() => onClick(Slideshare_PageType_Enum.Text)}
                imageUrl="/static/page_select/text.png" title="Text" description="You can write markdown text" />
            <div style={{ height: 5 }} />
            <MenuButton
                onClick={() => onClick(Slideshare_PageType_Enum.Image)}
                imageUrl="/static/page_select/image.png" title="Image/Gif" description="Upload your image or embed with a link" />
            <div style={{ height: 5 }} />
            <MenuButton
                onClick={() => onClick(Slideshare_PageType_Enum.Poll)}
                imageUrl="/static/page_select/poll.png" title="Poll" description="Hear opinions from audiences" />
            <div style={{ height: 5 }} />
            <MenuButton
                onClick={() => onClick(Slideshare_PageType_Enum.Bookmark)}
                imageUrl="/static/page_select/bookmark.png" title="Links" description="List reference or source urls" />
            <div style={{ height: 5 }} />
            <MenuButton
                onClick={() => onClick(Slideshare_PageType_Enum.File)}
                imageUrl="/static/page_select/file.png" title="File" description="Upload your pptx or pdf for download" />


            <div style={{ height: 10 }} />
            <Typography variant="h5" align="center">Embed other service</Typography>
            <MenuButton
                onClick={() => onClick(Slideshare_PageType_Enum.Video)}
                imageUrl="/static/page_select/youtube.png" title="Youtube" description="Embed with youtube link" />
            <div style={{ height: 5 }} />
            <MenuButton
                onClick={() => onClick(Slideshare_PageType_Enum.Codepen)}
                imageUrl="/static/page_select/codepen.png" title="CodePen" description="Embed with codepen link" />
            <div style={{ height: 5 }} />
            <MenuButton
                onClick={() => onClick(Slideshare_PageType_Enum.Typeform)}
                imageUrl="/static/page_select/typeform.png" title="Typeform" description="Embed with typeform link" />
            <div style={{ height: 5 }} />
            <MenuButton
                onClick={() => onClick(Slideshare_PageType_Enum.Notion)}
                imageUrl="/static/page_select/notion.png" title="Notion" description="Embed with Notion link" />
            <div style={{ height: 5 }} />
        </div>
    </>
}