import { Button } from "@mui/material"
import React, { useEffect, useState } from "react"
import { usePageList } from "../../model/hooks/usePageList"
import { MultiplePoll } from "../slide/poll/MultiplePoll"
import MenuButtonList from "./choice_page_type/MenuButtonList"
import ImageEditor from "./editor/ImageEditor"
import MarkdownEditor from "./editor/MarkdownEditor"
import ImagePreview from "./preview/ImagePreview"

export default () => {
    const [results, setResults] = useState([{ text: "hoge", votes: 0 }, { text: "こんにちは", votes: 0 }])
    const onClick = () => {
        const a = Object.assign({}, results[0])
        const b = Object.assign({}, results[1])
        a.votes += 1
        setResults([a, b])
    }

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
        const customTheme = {
            textColor: 'black',
            mainColor: '#00B87B',
            backgroundColor: 'rgb(255,255,255)',
            alignment: 'center'
        }
        return <div style={{ width: 500 }}>
            <MultiplePoll
                question="test"
                theme={customTheme}
                results={results}
            />
            <Button onClick={onClick}>test</Button>
        </div>
    }
    if (focusedPage.type === "text") {
        return <MarkdownEditor />
    }
    return <div>bug</div>
}