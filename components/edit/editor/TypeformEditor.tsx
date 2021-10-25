import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { TextField, InputAdornment, Typography } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import { usePageList } from '../../../model/hooks/usePageList';
import { Page } from '../../../model/Page';
import { Widget } from '@typeform/embed-react'
import UrlEditor from '../../common/UrlEditor';
interface Props {
    page: Page
}

export default (props: Props) => {
    const [url, setUrl] = useState(props.page.videoUrl)
    const [idPart, setIdPart] = useState("")

    useEffect(() => {
        try {
            if (!url) throw Error()
            const splittedUrl = url.split("/")
            if (splittedUrl.length !== 1) {
                setIdPart(splittedUrl[splittedUrl.length - 1])
            }
        } catch {
            //TODO: URLが不正
        }
    }, [])



    const { updatePage } = usePageList()

    const onClickSave = () => {
        try {
            if (!url) throw Error()
            const splittedUrl = url.split("/")
            if (splittedUrl.length !== 1) {
                setIdPart(splittedUrl[splittedUrl.length - 1])
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
            label="Typeformリンク"
            url={url || ""}
            setUrl={setUrl}
            onClickSave={onClickSave}
        />
        <p>対応リンク形式<br />
            ・ https://XXX.typeform.com/to/YYY<br />
        </p>
        {idPart ? <Widget id={idPart} style={{ width: 560, height: 315 }} /> : <div />}
    </>
}