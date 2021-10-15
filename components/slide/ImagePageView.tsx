import style from "./ImagePageView.module.css"
import { useEffect, useState } from "react"
import { Storage } from "aws-amplify";

interface Props {
    imageUrl?: string | null
    onClickLeft?: () => void
    onClickRight?: () => void
}

export default (props: Props) => {
    //制御変数
    const [customizeWidth, setWidth] = useState(850)

    //スライドサイズは16:9, 4:3から選ぶ
    const width = customizeWidth
    const height = (customizeWidth / 16 * 9)
    const sizeStyle = { width, height }
    const imageSizeStyle = { width, height, backgroundSize: `${width}px ${height}px` }

    //画像Path
    //TODO: 画像ひとつ表示するだけでこれはきつい・・・
    const [url, setUrl] = useState("")
    useEffect(() => {
        if (!props.imageUrl) return
        const load = async () => {
            if (props.imageUrl) {
                const signedURL = await Storage.get(props.imageUrl!);
                setUrl(signedURL)
            }
        }
        load()
    }, [props.imageUrl])
    const pictureUrl = "url(" + url + ")"

    return <>
        <div
            className={style.paper}
            style={{ ...sizeStyle, position: "relative" }}
        >
            <div
                className={style.picture}
                style={{ backgroundImage: pictureUrl, ...imageSizeStyle }}
            />
            <div
                onClick={props.onClickLeft}
                style={{
                    position: "absolute",
                    top: 0,
                    width: width / 2, height
                }} />
            <div
                onClick={props.onClickRight}
                style={{
                    position: "absolute",
                    top: 0,
                    left: width / 2,
                    width: width / 2, height
                }} />
        </div>
    </>
}