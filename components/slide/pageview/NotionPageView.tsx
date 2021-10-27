
import React, { useEffect, useState } from "react"
import { Collection, CollectionRow, NotionRenderer } from 'react-notion-x'
import { Page } from "../../../model/Page"

interface Props {
    page: Page
    width: number
    height: number
}

export default (props: Props) => {
    const { width, height, page } = props
    const [data, setData] = useState<any>()
    useEffect(() => {
        const load = async () => {
            const d = await (await fetch("/api/notion")).json()
            console.log({ d })
            setData(d)
        }
        load()
    }, [])


    return <div style={{
        width, height,
        overflowY: "scroll",
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
    }}>
        {data ? <NotionRenderer
            components={{
                collection: Collection,
                collectionRow: CollectionRow
            }}
            darkMode={true}
            mapPageUrl={(pageId) => "#"}
            recordMap={data} /> : <div />}

    </div>
}