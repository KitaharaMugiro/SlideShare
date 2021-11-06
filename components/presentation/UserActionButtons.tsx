import { ButtonGroup, Button } from "@mui/material"
import React from "react"
import { useRealtimeUserAction } from "realtimely"

const ACTION_ID = "button"
export default () => {
    const actionList = [
        { value: "👌", text: "OK👌" },
        { value: "✋", text: "Stop✋" },
        { value: "👏", text: "Clap👏" },
    ]
    const { pushUserAction } = useRealtimeUserAction()

    const onClick = (action: string) => {
        pushUserAction(ACTION_ID, action)
    }

    return (
        <div className="user-action-buttons">
            <ButtonGroup size="large" aria-label="large button group">
                {actionList.map((action, index) => {
                    return (
                        <Button key={index} onClick={() => onClick(action.value)}>{action.text}</Button>
                    )
                })}
            </ButtonGroup>
        </div>
    )
}