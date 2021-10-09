import MenuButton from "./MenuButton"
import FrameSize from "./FrameSize"

interface Props {
    imageUrl: string,
    isFocus?: boolean
}

//TODO: Focus　Colorを決める
export default (props: Props) => <>
    <div style={{
        position: "relative",
        backgroundImage: `url("${props.imageUrl}")`,
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