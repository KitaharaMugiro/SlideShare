import React, { useState } from "react"
import { Page } from "../../../model/Page"
import UrlEditor from "../../common/UrlEditor"

interface Props {
    page: Page
}

export default (props: Props) => {
    const [urls, setUrls] = useState(props.page.Bookmarks)
    const [url, setUrl] = useState("")

    const onClickSave = () => {

    }
    return <>
        <UrlEditor
            label="リンク"
            url={url || ""}
            setUrl={setUrl}
            onClickSave={onClickSave}
        />
    </>
}