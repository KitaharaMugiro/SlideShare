
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React, { useState } from "react";

interface Props {
    initialValues: { key: string, value: string, title: string }[]
    dialogTitle: string
    dialogDescription: string
    open: boolean
    onFinishEdit: (values: { key: string, value: string }[]) => void
    onClose?: () => void
    width?: number
}

export default function MyDialog(props: Props) {
    const [values, setValus] = useState<{ key: string, title: string, value: string }[]>(props.initialValues)

    const onChangeTextField = (key: string, value: string) => {
        const index = values.findIndex(v => v.key === key)
        setValus([
            ...values.slice(0, index),
            {
                ...values[index],
                value,
            },
            ...values.slice(index + 1)
        ])
    }

    const renderTextFields = () => {
        return values.map(v => {
            return <div key={v.key}>
                <TextField
                    autoFocus
                    margin="dense"
                    label={v.title || "Name"}
                    fullWidth
                    variant="standard"
                    value={v.value}
                    onChange={e => onChangeTextField(v.key, e.target.value)}
                />
            </div>
        })
    }

    return (
        <Dialog open={props.open} onClose={props.onClose} >
            <div style={{ width: props.width }} />
            <DialogTitle>{props.dialogTitle}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.dialogDescription}
                </DialogContentText>
                {renderTextFields()}
            </DialogContent>
            <DialogActions>
                <Button
                    disabled={values.filter(v => v.value.trim() === "").length > 0}
                    onClick={() => props.onFinishEdit(values)}>OK</Button>
            </DialogActions>
        </Dialog>
    );
}
