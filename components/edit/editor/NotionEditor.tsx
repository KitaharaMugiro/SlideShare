import React, { useEffect, useRef, useState } from "react";
import { usePageList } from '../../../model/hooks/usePageList';
import { Page } from '../../../model/Page';
import UrlEditor from "../../common/UrlEditor";
import { Collection, CollectionRow, NotionRenderer, Equation, Code } from 'react-notion-x'
import useNotion from "../../../model/hooks/useNotion";

interface Props {
    page: Page
}

export default (props: Props) => {
    const [url, setUrl] = useState(props.page.videoUrl || "")
    const { updatePage } = usePageList()
    const { notionData } = useNotion(url)


    const onClickSave = () => {
        try {
            const page = Object.assign({}, props.page)
            page.videoUrl = url //TODO: videoUrlに渡すのをやめたい
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
        {notionData ? <NotionRenderer
            components={{
                equation: Equation,
                code: Code,
                collection: Collection,
                collectionRow: CollectionRow
            }}
            mapPageUrl={(pageId) => "#"}
            fullPage={false}
            darkMode={false}
            recordMap={notionData} /> : <div />}
    </>
}