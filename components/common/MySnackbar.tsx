import { Alert, Snackbar } from "@mui/material";
import { useAtom } from "jotai";
import React from "react";
import { SnackbarAtom, SnackbarMessageAtom, SnackbarColorAtom } from "../../model/jotai/Backdrop";

export default () => {
    const [open, setOpen] = useAtom(SnackbarAtom)
    const [message] = useAtom(SnackbarMessageAtom)
    const [color] = useAtom(SnackbarColorAtom)

    const handleClose = (
        event: React.SyntheticEvent | React.MouseEvent,
        reason?: string,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={color} sx={{ width: '100%' }}>
                    {message}
                </Alert>

            </Snackbar>
        </div>
    );
}