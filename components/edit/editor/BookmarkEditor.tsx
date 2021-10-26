import { Button, Link } from "@mui/material"
import React, { useState } from "react"
import { Page } from "../../../model/Page"
import UrlEditor from "../../common/UrlEditor"

import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { useDeleteBookmarkMutation, useInsertBookmarkMutation } from "../../../src/generated/graphql";
import BookmarkList from "../../common/BookmarkList";
interface Props {
    page: Page
}

export default (props: Props) => {
    const [urls, setUrls] = useState(props.page.Bookmarks)
    const [url, setUrl] = useState("")
    const [insertBookmark] = useInsertBookmarkMutation()
    const [deleteBookmark] = useDeleteBookmarkMutation()

    const onClickSave = async () => {
        const result = await insertBookmark({ variables: { pageId: props.page.id, url: url } })
        const id = result.data?.insert_slideshare_Bookmark_one?.id
        if (!id) return
        if (urls) {
            setUrls([...urls, { url, id }])
        } else {
            setUrls([{ url, id: id }])
        }
        setUrl("")
    }

    const onClickLinkDelete = (id: number) => {
        deleteBookmark({ variables: { id } })
        const newUrls = urls?.filter(u => u.id !== id)
        setUrls(newUrls)
    }


    return <>
        <UrlEditor
            label="リンク"
            url={url || ""}
            setUrl={setUrl}
            onClickSave={onClickSave}
            buttonName="ADD"
        />
        <div style={{ height: 10 }} />
        {urls ? <BookmarkList urls={urls} onClickLinkDelete={onClickLinkDelete} /> : <div />}
    </>
}