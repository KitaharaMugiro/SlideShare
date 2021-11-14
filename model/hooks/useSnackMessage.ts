import { useAtom } from "jotai"
import { BackdropAtom, BackdropMessageAtom, SnackbarAtom, SnackbarColorAtom, SnackbarMessageAtom } from "../jotai/Backdrop"

export const useSnackMessage = () => {
    const [open, setOpen] = useAtom(SnackbarAtom)
    const [__, setMessage] = useAtom(SnackbarMessageAtom)
    const [_, setColor] = useAtom(SnackbarColorAtom)

    const displayInfoMessage = (message: string) => {
        setMessage(message)
        setColor("info")
        setOpen(true)
    }

    const displayErrorMessage = (message: string) => {
        setMessage(message)
        setColor("error")
        setOpen(true)
    }


    return { displayInfoMessage, displayErrorMessage }
}