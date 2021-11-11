import { Alert, AlertTitle, Button } from "@mui/material"
import { format } from "date-fns"
import React from "react"
import useSignin from "../../model/hooks/useSignin"
import useUser from "../../model/hooks/useUser"
import { useInsertSubscribeMutation, useQuerySubscribeQuery } from "../../src/generated/graphql"

interface Props {
    startDate: Date
    title: string
    conferenceId: number
}

export default (props: Props) => {
    const { user } = useUser()
    const { goSignin } = useSignin()
    const { data, loading, error, refetch } = useQuerySubscribeQuery({
        variables: {
            conferenceId: props.conferenceId,
            userId: user?.attributes.sub
        }
    })
    const [subsribeMutation] = useInsertSubscribeMutation()
    const isSubscribed = (data?.slideshare_ConferenceSubscriber.length || []) > 0
    const onClick = async () => {
        if (!user) {
            goSignin()
            return
        }
        await subsribeMutation({
            variables: {
                conferenceId: props.conferenceId
            }
        })
        await refetch()
    }

    return (
        <Alert severity="success">
            <AlertTitle>{format(props.startDate, "yyyy/MM/dd HH:mm")} から開催します。</AlertTitle>
            <strong>「{props.title}」</strong>を忘れずに参加しましょう。
            <div style={{ height: 10 }} />
            {isSubscribed ?
                <Button variant="contained" disabled={true}>申込済</Button> :
                <Button variant="contained" onClick={onClick}>申し込む</Button>}
        </Alert>
    )
}