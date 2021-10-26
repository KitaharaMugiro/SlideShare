import { LinkPreview } from "@dhaiwat10/react-link-preview"
import { Button } from "@mui/material"
import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    urls: { id: number, url: string }[]
    onClickLinkDelete?: (id: number) => void
}

export default (props: Props) => {
    const { urls, onClickLinkDelete } = props

    const renderLinks = () => {
        if (!urls) return <div />
        return urls.map(u => {
            return <div key={u.id} style={{ display: "flex", marginBottom: 5 }}>
                <LinkPreview
                    url={u.url}
                    width={380}
                />
                {onClickLinkDelete ?
                    <Button onClick={() => onClickLinkDelete(u.id)}><DeleteIcon /></Button>
                    : <div />}
            </div>
        })
    }

    return <>
        {renderLinks()}
    </>
}