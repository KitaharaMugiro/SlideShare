import { Skeleton } from "@mui/material"
import FrameSize from "./FrameSize"

export default () => {
    return <>
        <div style={{
            width: FrameSize.width,
            height: FrameSize.height,
            margin: `${FrameSize.margin}px`,
        }}>
            <Skeleton variant="rectangular" width={FrameSize.width} height={FrameSize.height} />
        </div>
    </>
}