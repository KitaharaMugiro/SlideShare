import { Backdrop, CircularProgress } from "@mui/material"
import { useAtom } from "jotai"
import React from "react"
import { BackdropAtom } from "../../model/jotai/Backdrop"

export default () => {
    const [open, setOpen] = useAtom(BackdropAtom)
    const handleClose = () => {
        setOpen(false)
    }

    return <>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
        >
            <CircularProgress color="inherit" />
            30秒ほどお待ちいただきます
        </Backdrop>
    </>
}