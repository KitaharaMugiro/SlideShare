
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React, { useState } from "react";
import { useTranslations } from "use-intl";

interface Props {
    name: string
    description: string
    open: boolean
    onFinishEdit: (name: string, profile: string) => void
}

export default function EditableProfileCard(props: Props) {
    const t = useTranslations("Profile")
    const [name, setName] = useState(props.name)
    const [profile, setProfile] = useState(props.description)
    const handleClose = () => {
        props.onFinishEdit(props.name, props.description);
    };

    return (
        <Dialog open={props.open} onClose={handleClose}>
            <DialogTitle>{t("profile")}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {t("edit-description")}
                </DialogContentText>
                <TextField
                    InputProps={{
                        style: { color: "white" }
                    }}
                    autoFocus
                    margin="dense"
                    label="Name"
                    fullWidth
                    variant="standard"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <TextField
                    InputProps={{
                        style: { color: "white" }
                    }}
                    autoFocus
                    margin="dense"
                    label="Profile"
                    fullWidth
                    multiline
                    minRows={2}
                    variant="standard"
                    value={profile}
                    onChange={e => setProfile(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.onFinishEdit(name, profile)}>OK</Button>
            </DialogActions>
        </Dialog>
    );
}
