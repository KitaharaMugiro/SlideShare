import { Paper, Button } from "@mui/material"
import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

interface Props {
    files: {
        id: number
        path: string
        filename: string
    }[]
    onClickLinkDelete?: (id: number) => void
    onClickDonwload: (path: string, filename: string) => void
}

export default (props: Props) => {
    const { files, onClickLinkDelete, onClickDonwload } = props
    const renderFiles = () => {
        if (!files) return <div />
        return files.map(f => {
            return <div key={f.id}>
                <div style={{ height: 10 }} />
                <div style={{ display: "flex" }}>
                    <Paper
                        style={{
                            padding: 10, width: 300,
                            display: "flex", flexDirection: "column",
                            justifyContent: "center"

                        }}
                        elevation={1} >
                        <p>・ {f.filename}</p>
                        <Button onClick={() => onClickDonwload(f.path, f.filename)} variant="outlined" startIcon={<FileDownloadIcon />}>
                            Donwload
                        </Button>

                    </Paper>
                    {onClickLinkDelete ?
                        <Button onClick={() => onClickLinkDelete(f.id)}><DeleteIcon /></Button>
                        : <div />}
                </div>
            </div>
        })
    }

    return <>
        {renderFiles()}
    </>
}