import React, { useEffect, useRef, useState } from "react";
import { usePageList } from '../../../model/hooks/usePageList';
import { Page } from '../../../model/Page';
import UrlEditor from "../../common/UrlEditor";
interface Props {
    page: Page
}

export default (props: Props) => {
    const [url, setUrl] = useState(props.page.videoUrl)
    const [youtubeEmbedUrl, setEmbedUrl] = useState("")

    const { updatePage } = usePageList()

    useEffect(() => {
        console.log("useEffect!")
        try {
            if (!url) throw Error()
            const splittedUrl = url.split("/")
            const url_ = new URL(url);
            const params = new URLSearchParams(url_.search);

            if (params.get("v")) {
                const idPart = params.get("v")
                setEmbedUrl(`https://www.youtube.com/embed/${idPart}`)
            } else if (splittedUrl.length !== 1) {
                const idPart = splittedUrl[splittedUrl.length - 1]
                setEmbedUrl(`https://www.youtube.com/embed/${idPart}`)
            }
        } catch {

        }
    }, [])

    const onClickSave = () => {
        try {
            if (!url) throw Error()
            const splittedUrl = url.split("/")
            const url_ = new URL(url);
            const params = new URLSearchParams(url_.search);

            let idPart: string | null = null
            if (params.get("v")) {
                idPart = params.get("v")
            }
            if (idPart == null && splittedUrl.length !== 1) {
                idPart = splittedUrl[splittedUrl.length - 1]
            }
            if (!idPart) {
                throw Error("idPartを取得失敗しました")
            }
            const youtubeEmbedUrl = `https://www.youtube.com/embed/${idPart}`
            setEmbedUrl(youtubeEmbedUrl)
            const page = Object.assign({}, props.page)
            page.videoUrl = youtubeEmbedUrl
            updatePage(page)
        } catch (e) {
            //TODO: URLが不正
            console.warn(e)
        }

    }


    return <>
        <UrlEditor
            label="Youtubeリンク"
            url={url || ""}
            setUrl={setUrl}
            onClickSave={onClickSave}
        />
        <p>対応リンク形式<br />
            ・ https://www.youtube.com/embed/XXX<br />
            ・ https://www.youtube.com/watch?v=XXX<br />
            ・ https://youtu.be/XXX<br /></p>
        <iframe
            width="560" height="315"
            src={youtubeEmbedUrl}
            frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
        </iframe>
    </>
}