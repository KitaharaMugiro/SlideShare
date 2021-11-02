import { Button } from "@mui/material"
import React, { useEffect, useState } from "react"
import { usePageList } from "../../../model/hooks/usePageList"
import style from "./ImagePreview.module.css"
import { Storage } from "aws-amplify"
interface Props {
    imageUrl: string
}

export default (props: Props) => {
    //TODO: ここをもっとマシにして
    const [customizeWidth, setWidth] = useState(750)
    const width = customizeWidth + "px"
    const height = (customizeWidth / 16 * 9) + "px"
    const sizeStyle = { minWidth: width, height, width: "100%" }
    const imageSizeStyle = { width: "100%", minWidth: width, height, backgroundSize: `${width} ${height}` }

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
        <div className={style.paper} style={sizeStyle} >
            <div
                className={style.picture}
                style={{ backgroundImage: `url("${url}")`, ...imageSizeStyle }}
            />
        </div>

    </>
}