import React from "react"
import FrameSize from "./FrameSize"
import MenuButton from "./MenuButton"

interface Props {
    text: string,
    isFocus?: boolean
}

//TODO: Focus　Colorを決める
export default (props: Props) => <>
    <div style={{
        position: "relative",
        width: FrameSize.width,
        height: FrameSize.height,
        margin: `${FrameSize.margin}px`,
        border: props.isFocus ? "1px solid rgba(81, 203, 238, 1)" : "1px solid",
        boxShadow: props.isFocus ? "0 0 5px rgba(81, 203, 238, 1)" : ""
    }}>
        <MenuButton />
        {props.text}
    </div>
</>