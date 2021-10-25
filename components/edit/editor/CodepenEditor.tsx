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
    const [user, setUser] = useState("")
    const [hash, setHash] = useState("")

    const { updatePage } = usePageList()

    useEffect(() => {
        try {
            const userAndHash = url?.replace("https://codepen.io/", "")
            const userAndHashList = userAndHash?.split("/pen/")
            if (userAndHashList?.length === 2) {
                setUser(userAndHashList[0])
                setHash(userAndHashList[1])
            }
        } catch {

        }
    }, [])

    const onClickSave = () => {
        try {
            const userAndHash = url?.replace("https://codepen.io/", "")
            const userAndHashList = userAndHash?.split("/pen/")
            if (userAndHashList?.length === 2) {
                setUser(userAndHashList[0])
                setHash(userAndHashList[1])
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
            label="CodePenリンク"
            url={url || ""}
            setUrl={setUrl}
            onClickSave={onClickSave}
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
    </div>
}