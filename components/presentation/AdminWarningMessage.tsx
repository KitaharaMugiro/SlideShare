import { Alert, AlertTitle, Button } from "@mui/material"
import { format } from "date-fns"
import React from "react"
import { ConferenceModel } from "../../model/Conference"
import useConference from "../../model/hooks/useConference"

interface Props {
    conferenceModel: ConferenceModel
}

export default ({ conferenceModel }: Props) => {
    const { updateStartDate } = useConference()

    const onClickStartNow = async () => {
        await updateStartDate(conferenceModel.id, new Date())
        window.location.reload()
    }

    return <>
        {conferenceModel.state === "beforeStart" && <Alert severity="error">
            <AlertTitle>{conferenceModel.startDateString} から開始します。</AlertTitle>
            まだ参加者はこのページにアクセスできません。<br />
            <div style={{ height: 10 }} />
            <Button variant="contained" onClick={onClickStartNow}>今から始める</Button>
        </Alert>}
        {conferenceModel.state === "completeEnd" && <Alert severity="error">
            <AlertTitle>登壇時間は終了しました。</AlertTitle>
            {conferenceModel.endDateString} に終了しました。<br />
            参加者はこのページにアクセスできません。
        </Alert>}
    </>
}