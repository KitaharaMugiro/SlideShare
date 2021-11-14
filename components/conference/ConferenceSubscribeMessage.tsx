import { Alert, AlertTitle, Button } from "@mui/material"
import { format } from "date-fns"
import React from "react"
import { useTranslations } from "use-intl"
import { ConferenceModel } from "../../model/Conference"
import useSignin from "../../model/hooks/useSignin"
import useUser from "../../model/hooks/useUser"
import { useInsertSubscribeMutation, useQuerySubscribeQuery } from "../../src/generated/graphql"

interface Props {
    conference: ConferenceModel
}

export default (props: Props) => {
    const t = useTranslations("Conference")
    const { user } = useUser()
    const { goSignin } = useSignin()
    const { data, loading, error, refetch } = useQuerySubscribeQuery({
        variables: {
            conferenceId: props.conference.id,
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
                conferenceId: props.conference.id
            }
        })
        await refetch()
    }

    return (
        <Alert severity="success">
            <AlertTitle>{t("start-date-description", { date: props.conference.startDateString })}</AlertTitle>
            <strong>「{props.conference.title}」</strong> {t("dont-forget")}
            <div style={{ height: 10 }} />
            {isSubscribed ?
                <Button variant="contained" disabled={true}>{t("applied")}</Button> :
                <Button variant="contained" onClick={onClick}>{t("apply")}</Button>}
        </Alert>
    )
}