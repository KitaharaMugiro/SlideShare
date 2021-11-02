import { useAtom } from "jotai"
import { BackdropAtom, BackdropMessageAtom } from "../jotai/Backdrop"

export const useLoading = (message?: string) => {
    const [open, setOpen] = useAtom(BackdropAtom)
    const [_, setMessage] = useAtom(BackdropMessageAtom)

    const startLoading = () => {
        if (message) setMessage(message)
        setOpen(true)
    }

    const finishLoading = () => {
        setOpen(false)
    }

    return { isLoading: open, startLoading, finishLoading }
}