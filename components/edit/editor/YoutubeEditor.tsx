import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { TextField, InputAdornment, Typography } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import { usePageList } from '../../../model/hooks/usePageList';
import { Page } from '../../../model/Page';

interface Props {
    page: Page
}

export default (props: Props) => {
    const [url, setUrl] = useState(props.page.videoUrl)
    let youtubeEmbedUrl: string | undefined = undefined
    try {
        const splittedUrl = url.split("/")
        const url_ = new URL(url);
        const params = new URLSearchParams(url_.search);

        if (params.get("v")) {
            const idPart = params.get("v")
            youtubeEmbedUrl = `https://www.youtube.com/embed/${idPart}`
        } else if (splittedUrl.length !== 1) {
            const idPart = splittedUrl[splittedUrl.length - 1]
            youtubeEmbedUrl = `https://www.youtube.com/embed/${idPart}`
        }
    } catch {
        //TODO: URLが不正
    }

    const valueRef = useRef<string | undefined>();
    const { updatePage } = usePageList()

    useEffect(() => {
        valueRef.current = youtubeEmbedUrl
    }, [youtubeEmbedUrl])

    useEffect(() => {
        return () => {
            const page = Object.assign({}, props.page)
            page.videoUrl = valueRef.current
            updatePage(page)
        }
    }, []);


    return <>
        <TextField
            label="Yotubeリンク"
            value={url}
            onChange={e => setUrl(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <InsertLinkIcon />
                    </InputAdornment>
                ),
            }}
            fullWidth
            variant="standard"
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