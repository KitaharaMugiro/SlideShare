import { Page } from "../../../model/Page";

interface Props {
    page: Page
    width: number
    height: number
    autoPlay?: boolean
}

export default (props: Props) => {
    let videoUrl = props.page.videoUrl || ""
    if (props.autoPlay) {
        videoUrl = videoUrl + "?autoplay=1"
    }
    return (
        <iframe width={props.width} height={props.height}
            src={videoUrl}
            frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
        </iframe>
    )
}