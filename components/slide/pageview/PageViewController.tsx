import { Button, Typography } from "@mui/material"
import React, { useState } from "react"
import { Page } from "../../../model/Page"
import { Slideshare_PageType_Enum } from "../../../src/generated/graphql"
import MarkdownEditor from "../../edit/editor/MarkdownEditor"
import { MultiplePoll } from "../poll/MultiplePoll"
import PollController from "../poll/PollController"
import BookmarkPageView from "./BookmarkPageView"
import CodepenPageView from "./CodepenPageView"
import FilePageView from "./FilePageView"
import GoogleFormPageView from "./GoogleFormPageView"
import ImagePageView from "./ImagePageView"
import style from "./ImagePageView.module.css"
import NotionPageView from "./NotionPageView"
import TypeformPageView from "./TypeformPageView"
import YoutubePageView from "./YoutubePageView"

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
    const freeImageSizeStyle = {
        width,
        height,
        backgroundPosition: "center",
        backgroundSize: "contain"
    }

    const renderPageView = () => {
        if (props.viewingPage.type === Slideshare_PageType_Enum.Image) {
            return <ImagePageView
                key={props.viewingPage.id}
                imageUrl={props.viewingPage?.imageUrl}
                imageSizeStyle={freeImageSizeStyle}
            />
        }
        if (props.viewingPage.type === Slideshare_PageType_Enum.FreeImage) {
            return <ImagePageView
                key={props.viewingPage.id}
                imageUrl={props.viewingPage?.imageUrl}
                imageSizeStyle={freeImageSizeStyle}
            />
        }
        if (props.viewingPage.type === Slideshare_PageType_Enum.Poll) {
            return <>
                <div style={{ position: "absolute", width: width / 3, left: width / 3 }}>
                    <PollController key={props.viewingPage.id} pageId={props.viewingPage.id} />
                </div>
            </>
        }
        if (props.viewingPage.type === Slideshare_PageType_Enum.Video) {
            return <YoutubePageView key={props.viewingPage.id} width={width} height={height} page={props.viewingPage} autoPlay={true} />
        }
        if (props.viewingPage.type === Slideshare_PageType_Enum.Text) {
            return <MarkdownEditor key={props.viewingPage.id} editable={false} height={height} page={props.viewingPage} />
        }
        if (props.viewingPage.type === Slideshare_PageType_Enum.Codepen) {
            return <CodepenPageView key={props.viewingPage.id} width={width} height={height} page={props.viewingPage} />
        }
        if (props.viewingPage.type === Slideshare_PageType_Enum.GoogleForm) {
            return <GoogleFormPageView key={props.viewingPage.id} width={width} height={height} page={props.viewingPage} />
        }
        if (props.viewingPage.type === Slideshare_PageType_Enum.Typeform) {
            return <TypeformPageView key={props.viewingPage.id} width={width} height={height} page={props.viewingPage} />
        }
        if (props.viewingPage.type === Slideshare_PageType_Enum.Bookmark) {
            return <BookmarkPageView key={props.viewingPage.id} width={width} height={height} page={props.viewingPage} />
        }
        if (props.viewingPage.type === Slideshare_PageType_Enum.File) {
            return <FilePageView key={props.viewingPage.id} width={width} height={height} page={props.viewingPage} />
        }
        if (props.viewingPage.type === Slideshare_PageType_Enum.Notion) {
            return <NotionPageView key={props.viewingPage.id} width={width} height={height} page={props.viewingPage} />
        }
        return <>非対応</>
    }

    const clickableFrame = () => {
        //TODO: スクロールの阻害にならないようにする
        if (props.viewingPage.type === Slideshare_PageType_Enum.Video ||
            props.viewingPage.type === Slideshare_PageType_Enum.Text ||
            props.viewingPage.type === Slideshare_PageType_Enum.Typeform ||
            props.viewingPage.type === Slideshare_PageType_Enum.Codepen ||
            props.viewingPage.type === Slideshare_PageType_Enum.Notion ||
            props.viewingPage.type === Slideshare_PageType_Enum.GoogleForm
        ) {
            return <>
                <Button
                    onClick={props.onClickLeft}
                    style={{
                        position: "absolute",
                        bottom: height / 2,
                        left: 0
                    }} >前へ</Button>
                <Button
                    onClick={props.onClickRight}
                    style={{
                        position: "absolute",
                        bottom: height / 2,
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