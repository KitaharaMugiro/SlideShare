import { Button } from "@mui/material"
import React, { useEffect, useState } from "react"
import { usePageList } from "../../../model/hooks/usePageList"
import style from "./ImagePreview.module.css"
import { Storage } from "aws-amplify"
import Image from "next/image"
interface Props {
    imageUrl: string
}

export default (props: Props) => {
    //TODO: 画像ひとつ表示するだけでこれはきつい・・・
    const [url, setUrl] = useState("")
    useEffect(() => {
        const load = async () => {
            const signedURL = await Storage.get(props.imageUrl);
            setUrl(signedURL)
        }
        load()
    }, [props.imageUrl])


    const { focusedPage } = usePageList()
    if (!focusedPage) return <div />
    return <>
        <div className={style.free_size_paper} >
            <img src={url} className={style.free_picture} />
        </div>

    </>
}