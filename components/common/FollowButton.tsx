import { Button } from "@mui/material"
import React from "react"

interface Props {
    userId?: string | null
}

export default (props: Props) => {
    if (!props.userId) return <div />
    const onClickFollow = () => {

    }
    return <>
        <Button onClick={onClickFollow}>Follow</Button>
    </>
}