import { Alert, AlertTitle, Button } from "@mui/material"
import { format } from "date-fns"
import React from "react"
import { useTranslations } from "use-intl"
import subscribe from "../../api/rest/subscribe"
import { ConferenceModel } from "../../model/Conference"
import useSignin from "../../model/util-hooks/useSignin"
import useUser from "../../model/util-hooks/useUser"
import { useInsertSubscribeMutation, useQuerySubscribeQuery } from "../../src/generated/graphql"

interface Props {
    conference: ConferenceModel
    slideId: number
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
        const conferenceId = props.conference.id
        const conferenceTitle = props.conference.title
        const startDate = props.conference.startDateString
        const url = `https://presen-share.yunomy.com/presentation/${props.slideId}`
        await subscribe(conferenceId, conferenceTitle, startDate, url)
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