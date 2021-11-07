import { Alert, AlertTitle, Button } from "@mui/material"
import { format } from "date-fns"
import React from "react"
import useConference from "../../model/hooks/useConference"

interface Props {
    conferenceId: number
    startDate: Date
    endDate: Date
}

export default ({ conferenceId, startDate, endDate }: Props) => {
    const { updateStartDate } = useConference()

    const onClickStartNow = async () => {
        await updateStartDate(conferenceId, new Date())
        window.location.reload()
    }

    return <>
        {startDate > new Date() && <Alert severity="error">
            <AlertTitle>{format(startDate, "yyyy/MM/dd HH:mm")} から開始します。</AlertTitle>
            まだ参加者はこのページにアクセスできません。<br />
            <div style={{ height: 10 }} />
            <Button variant="contained" onClick={onClickStartNow}>今から始める</Button>
        </Alert>}
        {endDate < new Date() && <Alert severity="error">
            <AlertTitle>登壇時間は終了しました。</AlertTitle>
            {format(endDate, "yyyy/MM/dd HH:mm")} に終了しました。<br />
            参加者はこのページにアクセスできません。
        </Alert>}
    </>
}