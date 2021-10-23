import { Button } from "@mui/material"
import React, { useEffect, useState } from "react"
import { usePageList } from "../../model/hooks/usePageList"
import { Slideshare_PageType_Enum } from "../../src/generated/graphql"
import { MultiplePoll } from "../slide/poll/MultiplePoll"
import MenuButtonList from "./choice_page_type/MenuButtonList"
import ImageEditor from "./editor/ImageEditor"
import MarkdownEditor from "./editor/MarkdownEditor"
import PollEditor from "./editor/PollEditor"
import ImagePreview from "./preview/ImagePreview"

export default () => {
    const { focusedPage } = usePageList()
    if (!focusedPage) {
        return (<div></div>)
    }
    if (!focusedPage.type || focusedPage.type === Slideshare_PageType_Enum.Temp) {
        return <>
            <MenuButtonList />
        </>
    }
    if (focusedPage.type === Slideshare_PageType_Enum.Image) {
        if (focusedPage.imageUrl) {
            return <ImagePreview imageUrl={focusedPage.imageUrl} />
        }
        return <ImageEditor />
    }
    if (focusedPage.type === Slideshare_PageType_Enum.Video) {
        return <div>動画は実装中です</div>
    }
    if (focusedPage.type === Slideshare_PageType_Enum.Text) {
        return <div style={{ width: "90%" }}>
            <MarkdownEditor page={focusedPage} editable={true} height={400} />
        </div>
    }
    if (focusedPage.type === Slideshare_PageType_Enum.Poll) {
        return <PollEditor page={focusedPage} />
    }
    return <div>対応していないページです</div>
}