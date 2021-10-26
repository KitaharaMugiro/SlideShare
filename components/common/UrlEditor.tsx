import { TextField, InputAdornment, Button } from "@mui/material"
import React from "react"
import SaveIcon from '@mui/icons-material/Save';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

interface Props {
    label: string
    url: string
    setUrl: (url: string) => void
    onClickSave: () => void
    buttonName?: string
}

export default (props: Props) => {
    return <>
        <div style={{ display: "flex" }}>
            <TextField
                label={props.label}
                value={props.url}
                onChange={e => props.setUrl(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <InsertLinkIcon />
                        </InputAdornment>
                    ),
                }}
                fullWidth
                variant="standard"
            />
            <Button
                onClick={props.onClickSave}
                startIcon={<SaveIcon />}
                variant="contained">{props.buttonName || "SAVE"}</Button>
        </div>
    </>
}