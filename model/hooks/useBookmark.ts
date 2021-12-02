import { useState } from "react"
import { useDeleteBookmarkMutation, useInsertBookmarkMutation, useInsertPollMutation } from "../../src/generated/graphql"
import { Page } from "../Page"
import { usePageList } from "./usePageList"
import { useSnackMessage } from "../util-hooks/useSnackMessage"

export default (initialState?: { id: number, url: string }[] | null) => {
    const { displayErrorMessage } = useSnackMessage()
    const { updatePage } = usePageList()
    const [insertBookmarkMutation] = useInsertBookmarkMutation({ onError: (e) => displayErrorMessage(e.message) })
    const [deleteBookmarkMutation] = useDeleteBookmarkMutation({ onError: (e) => displayErrorMessage(e.message) })
    const [bookmarks, setBookmarks] = useState(initialState || [])

    const createBookmark = async (page: Page, url: string) => {
        const result = await insertBookmarkMutation({ variables: { pageId: page.id, url: url } })
        const id = result.data?.insert_slideshare_Bookmark_one?.id
        if (!id) return

        const newState = [...bookmarks, { id, url }]
        setBookmarks(newState)
        page.Bookmarks = newState
        updatePage(page, true)
    }

    const deleteBookmark = async (page: Page, bookMarkId: number) => {
        deleteBookmarkMutation({ variables: { id: bookMarkId } })
        const newUrls = bookmarks?.filter(u => u.id !== bookMarkId)
        setBookmarks(newUrls)
        page.Bookmarks = newUrls
        updatePage(page, true)
    }

    return { bookmarks, createBookmark, deleteBookmark }
}