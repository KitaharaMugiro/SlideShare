import MenuButton from "./MenuButton"
import FrameSize from "./FrameSize"
import { useEffect, useState } from "react";
import { Storage } from "aws-amplify"

interface Props {
    imageUrl: string,
    isFocus?: boolean
}

//TODO: Focus　Colorを決める
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

    return <>
        <div style={{
            position: "relative",
            backgroundImage: `url("${url}")`,
            backgroundSize: `${FrameSize.width}px ${FrameSize.height}px`,
            backgroundRepeat: "no-repeat",
            width: FrameSize.width,
            height: FrameSize.height,
            margin: `${FrameSize.margin}px`,
            border: props.isFocus ? "1px solid rgba(81, 203, 238, 1)" : "1px solid",
            boxShadow: props.isFocus ? "0 0 5px rgba(81, 203, 238, 1)" : ""
        }}>
            <MenuButton />
        </div>
    </>
}