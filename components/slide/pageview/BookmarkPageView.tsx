
import { Page } from "../../../model/Page"
import BookmarkList from "../../common/BookmarkList"

interface Props {
    page: Page
    width: number
    height: number
}

export default (props: Props) => {
    const { width, height, page } = props
    const urls = page.Bookmarks


    return <div style={{
        width, height,
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }}>
        <h1 style={{ color: "white" }}>Links</h1>
        {urls ? <BookmarkList urls={urls} /> : <div />}
    </div>
}