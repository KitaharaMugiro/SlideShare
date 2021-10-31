import React, { useState } from "react";
import useBookmark from "../../../model/hooks/useBookmark";
import { Page } from "../../../model/Page";
import { useDeleteBookmarkMutation, useInsertBookmarkMutation } from "../../../src/generated/graphql";
import BookmarkList from "../../common/BookmarkList";
import UrlEditor from "../../common/UrlEditor";

interface Props {
    page: Page
}

export default (props: Props) => {
    const { bookmarks, createBookmark, deleteBookmark } = useBookmark(props.page.Bookmarks);
    const [url, setUrl] = useState("")

    const onClickSave = async () => {
        createBookmark(props.page, url);
        setUrl("")
    }

    const onClickLinkDelete = (id: number) => {
        deleteBookmark(props.page, id)
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
        {bookmarks ? <BookmarkList urls={bookmarks} onClickLinkDelete={onClickLinkDelete} /> : <div />}
    </>
}