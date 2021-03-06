import { Button, Stack } from "@mui/material";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { useTranslations } from "use-intl";
import useConference from "../../model/hooks/useConference";
import { useQueryConferenceBySlideIdQuery } from "../../src/generated/graphql";
import ConferenceInfoModalButton from "../conference/ConferenceInfoModalButton";

interface Props {
    slideId: number
}

export default (props: Props) => {
    const t = useTranslations("Conference")

    const router = useRouter()
    const { slideId } = props
    const { data, loading, error } = useQueryConferenceBySlideIdQuery({ variables: { slideId } })
    const latestConference = data?.slideshare_Conference ? data?.slideshare_Conference[0] : undefined
    const [now] = useState(new Date())

    const renderConference = () => {
        if (latestConference) {
            if (new Date(latestConference.endDate) > now) {
                return <>
                    <Button href={`/presentation/${slideId}`}>{t("open-with-presentation-mode")}</Button>
                    <ConferenceInfoModalButton
                        slideId={Number(slideId)}
                        updateConferenceId={latestConference.id}
                        initialTitle={latestConference.title || ""}
                        initialStartDate={new Date(latestConference.startDate)}
                        initialEndDate={new Date(latestConference.endDate)} />
                </>
            }
        }

        return <ConferenceInfoModalButton slideId={Number(slideId)} />
    }

    return <>
        <Stack direction="row" spacing={2}>
            {renderConference()}
        </Stack>
    </>
}