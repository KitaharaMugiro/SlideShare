import { useState, useEffect } from "react"

export default (url: string) => {
    const [notionData, setData] = useState<any>()
    const [notionId, setNotionId] = useState("")


    useEffect(() => {
        if (!url) return
        const id = url.split("/").pop()
        if (!id) return
        setNotionId(id)
    }, [url])

    useEffect(() => {
        const load = async () => {
            if (!notionId) return
            const d = await (await fetch("/api/notion", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ notionId })
            })).json()
            setData(d)
        }
        load()
    }, [notionId])
    return { notionData }
}