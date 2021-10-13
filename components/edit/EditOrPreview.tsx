import React from "react"
import { usePageList } from "../../model/hooks/usePageList"
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
        if (focusedPage.imageUrl) {
            return <ImagePreview imageUrl={focusedPage.imageUrl} />
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