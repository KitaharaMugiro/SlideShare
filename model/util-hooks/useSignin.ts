import { useAtom } from "jotai"
import { useRouter } from "next/dist/client/router"
import { PreviousUrlAtom } from "../jotai/PreviousUrl"

export default () => {
    const [url, setUrl] = useAtom(PreviousUrlAtom)
    const router = useRouter()

    const goSignin = () => {
        setUrl(router.asPath)
        router.push("/signin")
    }

    return { url, goSignin }
}