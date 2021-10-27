import React, { useEffect, useRef, useState } from "react";
import { usePageList } from '../../../model/hooks/usePageList';
import { Page } from '../../../model/Page';
import UrlEditor from "../../common/UrlEditor";
import { Collection, CollectionRow, NotionRenderer } from 'react-notion-x'

interface Props {
    page: Page
}

export default (props: Props) => {
    const [url, setUrl] = useState(props.page.videoUrl)
    const [notionId, setNotionId] = useState("")
    const [data, setData] = useState<any>()
    const { updatePage } = usePageList()

    useEffect(() => {
        const load = async () => {
            if (!notionId) return
            const d = await (await fetch("/api/notion", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ notionId })
            })).json()
            setData(d)
        }
        load()
    }, [notionId])

    useEffect(() => {
        if (!url) return
        const id = url.split("/").pop()
        if (!id) return
        setNotionId(id)
    }, [])

    const onClickSave = () => {
        try {
            if (!url) throw Error()
            const splittedUrl = url.split("/")

            if (splittedUrl.length !== 1) {
                const idPart = splittedUrl[splittedUrl.length - 1]
                setNotionId(idPart)
            }

            const page = Object.assign({}, props.page)
            page.videoUrl = url
            updatePage(page)
        } catch {
            //TODO: URLが不正
        }

    }


    return <>
        <UrlEditor
            label="Notionリンク"
            url={url || ""}
            setUrl={setUrl}
            onClickSave={onClickSave}
        />
        <p>対応リンク形式<br />
            ・ https://www.notion.so/XXX<br />
            ※ 公開設定になっている必要があります。
        </p>
        {data ? <NotionRenderer
            components={{
                collection: Collection,
                collectionRow: CollectionRow
            }}
            mapPageUrl={(pageId) => "#"}
            fullPage={false}
            darkMode={false}
            recordMap={data} /> : <div />}
    </>
}