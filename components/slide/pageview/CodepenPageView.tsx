import React from "react";
import { Page } from "../../../model/Page";
import { Widget } from '@typeform/embed-react'
import Codepen from "ts-react-codepen-embed";

interface Props {
    page: Page
    width: number
    height: number
}

export default (props: Props) => {
    let user: string | undefined = undefined
    let hash: string | undefined = undefined
    const userAndHash = props.page.videoUrl?.replace("https://codepen.io/", "")
    const userAndHashList = userAndHash?.split("/pen/")
    if (userAndHashList?.length === 2) {
        user = userAndHashList[0]
        hash = userAndHashList[1]
    }

    return <div>
        {hash && user ?
            <Codepen
                hash={hash} user={user}
                defaultTab="result"
                height={props.height} />
            : <div />}
    </div>
}