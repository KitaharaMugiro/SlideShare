import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { UserAtom } from "../jotai/User"
import { v4 as uuidv4 } from "uuid"

export default () => {
    const [user, setUser] = useAtom(UserAtom)
    const [tempUserId, setTempUserId] = useState("")
    useEffect(() => {
        if (process.browser) {
            if (localStorage.getItem("TEMP_USER_ID")) {
                setTempUserId(localStorage.getItem("TEMP_USER_ID") as string)
            } else {
                localStorage.setItem("TEMP_USER_ID", uuidv4())
                setTempUserId(localStorage.getItem("TEMP_USER_ID") as string)
            }
        }
    }, [process.browser])
    return { user, setUser, tempUserId }
}