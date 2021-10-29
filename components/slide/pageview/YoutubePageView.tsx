import { Page } from "../../../model/Page";

interface Props {
    page: Page
    width: number
    height: number
}

export default (props: Props) => {
    console.log({ videoUrl: props.page.videoUrl })
    return (
        <iframe width={props.width} height={props.height}
            src={props.page.videoUrl || ""}
            frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
        </iframe>
    )
}