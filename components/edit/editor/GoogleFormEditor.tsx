import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { TextField, InputAdornment, Typography } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import { usePageList } from '../../../model/hooks/usePageList';
import { Page } from '../../../model/Page';
import Codepen from "ts-react-codepen-embed";
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

    return <div>
        <UrlEditor
            label="GoogleFormリンク"
            url={url || ""}
            setUrl={setUrl}
            onClickSave={onClickSave}
        />
        <p>対応リンク形式<br />
            ・ https://docs.google.com/forms/d/e/XXX<br />
        </p>
        {idPart ?
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: 560,
                    paddingTop: "75%",
                    height: 0
                }}>
                <iframe
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    width="560" height="315"
                    src={`https://docs.google.com/forms/d/e/${idPart}/viewform?embedded=true`}
                    frameBorder="0" marginHeight={0} marginWidth={0}>読み込んでいます…
                </iframe>
            </div>

            : <div />
        }
    </div >
}