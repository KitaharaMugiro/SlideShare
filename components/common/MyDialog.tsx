
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React, { useState } from "react";

interface Props {
    initialValues: { key: string, value: string }[]
    dialogTitle: string
    dialogDescription: string
    open: boolean
    onFinishEdit: (values: { key: string, value: string }[]) => void
    onClose?: () => void
}

export default function MyDialog(props: Props) {
    const [values, setValus] = useState<{ key: string, value: string }[]>(props.initialValues)

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
            return <>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Name"
                    fullWidth
                    variant="standard"
                    value={v.value}
                    onChange={e => onChangeTextField(v.key, e.target.value)}
                />
            </>
        })
    }

    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>{props.dialogTitle}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.dialogDescription}
                </DialogContentText>
                {renderTextFields()}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.onFinishEdit(values)}>OK</Button>
            </DialogActions>
        </Dialog>
    );
}
