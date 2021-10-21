import { Button } from "@mui/material"
import React, { useState } from "react"
import { Page } from "../../../model/Page"
import { Slideshare_PageType_Enum } from "../../../src/generated/graphql"
import MarkdownEditor from "../../edit/editor/MarkdownEditor"
import { MultiplePoll } from "../poll/MultiplePoll"
import ImagePageView from "./ImagePageView"
import style from "./ImagePageView.module.css"

interface Props {
    viewingPage: Page
    onClickLeft: () => void
    onClickRight: () => void
}

export default (props: Props) => {
    //制御変数
    const [customizeWidth, setWidth] = useState(850)

    //スライドサイズは16:9, 4:3から選ぶ
    const width = customizeWidth
    const height = (customizeWidth / 16 * 9)
    const sizeStyle = { width, height }
    const imageSizeStyle = {
        width,
        height,
        backgroundSize: `${width}px ${height}px`
    }

    const renderPageView = () => {
        if (props.viewingPage.type === Slideshare_PageType_Enum.Image) {
            return <ImagePageView
                imageUrl={props.viewingPage?.imageUrl}
                imageSizeStyle={imageSizeStyle}
            />
        }
        if (props.viewingPage.type === Slideshare_PageType_Enum.Poll) {
            return <>
                <div style={{ position: "absolute", width: width / 3, left: width / 3 }}>
                    <MultiplePoll
                        question="このように投票をかけます"
                        results={[{ text: "React", votes: 9 }, { text: "Vue", votes: 4 }]}
                    />
                </div>
            </>
        }
        if (props.viewingPage.type === Slideshare_PageType_Enum.Video) {
            return <>
                <iframe width={width} height={height}
                    src="https://www.youtube.com/embed/OWoKzNxZWw8"
                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                </iframe>
            </>
        }
        if (props.viewingPage.type === Slideshare_PageType_Enum.Text) {
            return <>
                <MarkdownEditor editable={false} height={height} />
            </>
        }


        return <>非対応</>
    }

    const clickableFrame = () => {
        if (props.viewingPage.type === Slideshare_PageType_Enum.Video ||
            props.viewingPage.type === Slideshare_PageType_Enum.Text) {
            return <>
                <Button
                    onClick={props.onClickLeft}
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0
                    }} >前へ</Button>
                <Button
                    onClick={props.onClickRight}
                    style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                    }} >次へ</Button>
            </>
        }
        return <>
            <div
                onClick={props.onClickLeft}
                style={{
                    position: "absolute",
                    top: 0,
                    width: width / 3, height,
                    cursor: "pointer"

                }} />
            <div
                onClick={props.onClickRight}
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: width / 3, height,
                    cursor: "pointer"
                }} />
        </>
    }

    return <>
        <div
            className={style.paper}
            style={{ ...sizeStyle, position: "relative" }}
        >

            {renderPageView()}
            {/* クリックゾーン */}
            {clickableFrame()}
        </div>
    </>
}