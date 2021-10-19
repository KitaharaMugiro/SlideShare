import { useAtom } from "jotai"
import { BackdropAtom } from "../jotai/Backdrop"

export const useLoading = () => {
    const [open, setOpen] = useAtom(BackdropAtom)

    const startLoading = () => {
        setOpen(true)
    }

    const finishLoading = () => {
        setOpen(false)
    }

    return { isLoading: open, startLoading, finishLoading }
}