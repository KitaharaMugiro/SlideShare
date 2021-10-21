import { Button } from "@mui/material"
import React, { useEffect, useState } from "react"
import { usePageList } from "../../model/hooks/usePageList"
import { MultiplePoll } from "../slide/poll/MultiplePoll"
import MenuButtonList from "./choice_page_type/MenuButtonList"
import ImageEditor from "./editor/ImageEditor"
import MarkdownEditor from "./editor/MarkdownEditor"
import ImagePreview from "./preview/ImagePreview"

export default () => {
    const { focusedPage } = usePageList()
    if (!focusedPage) {
        return (<div></div>)
    }
    if (!focusedPage.type || focusedPage.type === "temp") {
        return <>
            <MenuButtonList />
        </>
    }
    if (focusedPage.type === "image") {
        if (focusedPage.imageUrl) {
            return <ImagePreview imageUrl={focusedPage.imageUrl} />
        }
        return <ImageEditor />
    }
    if (focusedPage.type === "video") {
        return <div>動画は実装中です</div>
    }
    if (focusedPage.type === "text") {
        return <div style={{ width: "90%" }}>
            <MarkdownEditor editable={true} height={400} />
        </div>
    }
    if (focusedPage.type === "poll") {
        return <div>投票は実装中です</div>
    }
    return <div>対応していないページです</div>
}