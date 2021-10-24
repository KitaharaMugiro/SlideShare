import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { TextField, InputAdornment, Typography } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import { usePageList } from '../../../model/hooks/usePageList';
import { Page } from '../../../model/Page';
import { Widget } from '@typeform/embed-react'
interface Props {
    page: Page
}

export default (props: Props) => {
    const [url, setUrl] = useState(props.page.videoUrl)
    let idPart: string | undefined = undefined
    try {
        if (!url) throw Error()
        const splittedUrl = url.split("/")
        if (splittedUrl.length !== 1) {
            idPart = splittedUrl[splittedUrl.length - 1]
        }
    } catch {
        //TODO: URLが不正
    }

    const valueRef = useRef<string | undefined>();
    const { updatePage } = usePageList()

    useEffect(() => {
        valueRef.current = idPart
    }, [idPart])

    useEffect(() => {
        return () => {
            const page = Object.assign({}, props.page)
            page.videoUrl = valueRef.current
            updatePage(page)
        }
    }, []);


    return <>
        <TextField
            label="Typeformリンク"
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
            ・ https://XXX.typeform.com/to/YYY<br />
        </p>
        {idPart ? <Widget id={idPart} style={{ width: 560, height: 315 }} /> : <div />}
    </>
}