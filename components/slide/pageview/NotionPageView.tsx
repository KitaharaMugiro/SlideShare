
import React, { useEffect, useState } from "react"
import { Collection, CollectionRow, NotionRenderer, Equation, Code } from 'react-notion-x'
import useNotion from "../../../model/hooks/useNotion"
import { Page } from "../../../model/Page"

interface Props {
    page: Page
    width: number
    height: number
}

export default (props: Props) => {
    const { width, height, page } = props
    const { notionData } = useNotion(page.videoUrl || "")

    return <div style={{
        width, height,
        overflowY: "scroll",
    }}>
        {notionData ? <NotionRenderer
            components={{
                equation: Equation,
                code: Code,
                collection: Collection,
                collectionRow: CollectionRow
            }}
            darkMode={true}
            mapPageUrl={(pageId) => "#"}
            recordMap={notionData} /> : <div />}

    </div>
}