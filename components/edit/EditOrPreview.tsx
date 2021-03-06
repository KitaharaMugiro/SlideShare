import React from "react"
import { usePageList } from "../../model/hooks/usePageList"
import { Slideshare_PageType_Enum } from "../../src/generated/graphql"
import MenuButtonList from "./choice_page_type/MenuButtonList"
import BookmarkEditor from "./editor/BookmarkEditor"
import CodepenEditor from "./editor/CodepenEditor"
import FileEditor from "./editor/FileEditor"
import GoogleFormEditor from "./editor/GoogleFormEditor"
import ImageEditor from "./editor/ImageEditor"
import MarkdownEditor from "./editor/MarkdownEditor"
import NotionEditor from "./editor/NotionEditor"
import PollEditor from "./editor/PollEditor"
import TypeformEditor from "./editor/TypeformEditor"
import YoutubeEditor from "./editor/YoutubeEditor"
import FreeImagePreview from "./preview/FreeImagePreview"
import ImagePreview from "./preview/ImagePreview"

export default () => {
    const { focusedPage } = usePageList()
    if (!focusedPage) {
        return (<div></div>)
    }
    if (!focusedPage.type || focusedPage.type === Slideshare_PageType_Enum.Temp) {
        return <>
            <MenuButtonList key={focusedPage.id} />
        </>
    }
    if (focusedPage.type === Slideshare_PageType_Enum.Image) {
        if (focusedPage.imageUrl) {
            return <ImagePreview key={focusedPage.id} imageUrl={focusedPage.imageUrl} />
        }
        return <ImageEditor />
    }
    if (focusedPage.type === Slideshare_PageType_Enum.FreeImage) {
        if (focusedPage.imageUrl) {
            return <FreeImagePreview key={focusedPage.id} imageUrl={focusedPage.imageUrl} />
        }
        return <ImageEditor />
    }
    if (focusedPage.type === Slideshare_PageType_Enum.Video) {
        return <div style={{ width: "100%", maxWidth: 500 }}>
            <YoutubeEditor key={focusedPage.id} page={focusedPage} />
        </div>
    }
    if (focusedPage.type === Slideshare_PageType_Enum.Text) {
        return <div style={{ width: "90%" }}>
            <MarkdownEditor key={focusedPage.id} page={focusedPage} editable={true} height={400} />
        </div>
    }
    if (focusedPage.type === Slideshare_PageType_Enum.Poll) {
        return <div style={{ width: "100%", maxWidth: 500 }}>
            <PollEditor key={focusedPage.id} page={focusedPage} />
        </div>
    }
    if (focusedPage.type === Slideshare_PageType_Enum.GoogleForm) {
        return <div style={{ width: "100%", maxWidth: 500 }}>
            <GoogleFormEditor key={focusedPage.id} page={focusedPage} />
        </div>
    }
    if (focusedPage.type === Slideshare_PageType_Enum.Typeform) {
        return <div style={{ width: "100%", maxWidth: 500 }}>
            <TypeformEditor key={focusedPage.id} page={focusedPage} />
        </div>
    }
    if (focusedPage.type === Slideshare_PageType_Enum.Codepen) {
        return <div style={{ width: "100%", maxWidth: 500 }}>
            <CodepenEditor key={focusedPage.id} page={focusedPage} />
        </div>
    }
    if (focusedPage.type === Slideshare_PageType_Enum.Bookmark) {
        return <div style={{ width: "100%", maxWidth: 500 }}>
            <BookmarkEditor key={focusedPage.id} page={focusedPage} />
        </div>
    }
    if (focusedPage.type === Slideshare_PageType_Enum.File) {
        return <FileEditor key={focusedPage.id} page={focusedPage} />
    }
    if (focusedPage.type === Slideshare_PageType_Enum.Notion) {
        return <div style={{ width: "100%", maxWidth: 500, position: "relative" }}>
            <NotionEditor key={focusedPage.id} page={focusedPage} />
        </div>
    }
    return <div>????????????????????????????????????</div>
}