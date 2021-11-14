import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTranslations } from 'use-intl';

export default function AlertDialog() {
    const t = useTranslations("Presentation")
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {t("conference-now")}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {t("presantation-warn1")} <br />
                        {t("presantation-warn2")}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        {t("join")}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}