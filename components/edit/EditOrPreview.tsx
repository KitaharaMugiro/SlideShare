import { useAtom } from "jotai"
import React from "react"
import { focusedPageIdAtom, usePageList } from "../../model/jotai/FocusedPageId"
import { pageListAtom } from "../../model/jotai/PageList"
import MenuButtonList from "./choice_page_type/MenuButtonList"
import ImageEditor from "./editor/ImageEditor"
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
        if (focusedPage.imageAttribute && focusedPage.imageAttribute.url) {
            return <ImagePreview imageUrl={focusedPage.imageAttribute.url} />
        }
        return <ImageEditor />
    }
    if (focusedPage.type === "video") {
        return <div>video</div>
    }
    if (focusedPage.type === "text") {
        return <div>text</div>
    }
    return <div>bug</div>
}