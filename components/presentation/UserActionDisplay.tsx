import { ConsoleLogger } from "@aws-amplify/core"
import { Chip, Stack } from "@mui/material"
import React from "react"
import { useRealtimeUserAction } from "realtimely"

export default () => {
    const { userActionList } = useRealtimeUserAction()

    const renderChips = () => {
        return userActionList.map(userAction => {
            return (
                <Chip key={userAction.key} label={userAction.value} style={{ backgroundColor: userAction.color }} />
            )
        })
    }

    return <>
        <Stack direction="row" spacing={1}>
            {renderChips()}
        </Stack>
    </>
}