
import { useEffect, useState } from "react"
import { Storage } from "aws-amplify";
import style from "./ImagePageView.module.css"

interface Props {
    imageUrl?: string | null
    imageSizeStyle: any
}

export default (props: Props) => {
    //画像Path
    //TODO: 画像ひとつ表示するだけでこれはきつい・・・
    const [url, setUrl] = useState("")
    useEffect(() => {
        if (!props.imageUrl) return
        const load = async () => {
            if (props.imageUrl) {
                const signedURL = await Storage.get(
                    props.imageUrl!,
                )
                setUrl(signedURL)
            }
        }
        load()
    }, [props.imageUrl])
    const pictureUrl = "url(" + url + ")"

    return <>
        <div
            className={style.picture}
            style={{ backgroundImage: pictureUrl, ...props.imageSizeStyle }}
        />
    </>
}