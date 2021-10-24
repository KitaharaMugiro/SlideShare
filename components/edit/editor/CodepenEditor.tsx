import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { TextField, InputAdornment, Typography } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import { usePageList } from '../../../model/hooks/usePageList';
import { Page } from '../../../model/Page';
import Codepen from "ts-react-codepen-embed";

interface Props {
    page: Page
}

export default (props: Props) => {
    const [url, setUrl] = useState(props.page.videoUrl)
    let user: string | undefined = undefined
    let hash: string | undefined = undefined
    try {
        const userAndHash = url?.replace("https://codepen.io/", "")
        const userAndHashList = userAndHash?.split("/pen/")
        if (userAndHashList?.length === 2) {
            user = userAndHashList[0]
            hash = userAndHashList[1]
        }
    } catch {
        //TODO: URLが不正
    }

    const valueRef = useRef<string | undefined | null>();
    const { updatePage } = usePageList()

    useEffect(() => {
        valueRef.current = url
    }, [url])

    useEffect(() => {
        return () => {
            const page = Object.assign({}, props.page)
            page.videoUrl = valueRef.current
            updatePage(page)
        }
    }, []);


    return <>
        <TextField
            label="Codepenリンク"
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
            ・ https://codepen.io/XXX/pen/YYY<br />
        </p>
        {hash && user ?
            <Codepen
                hash={hash} user={user}
                defaultTab="result"
                height={315} />
            : <div />}

    </>
}