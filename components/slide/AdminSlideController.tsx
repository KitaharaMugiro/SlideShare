import { Button, Stack } from "@mui/material";
import { useRouter } from "next/dist/client/router";
import React from "react";
import useConference from "../../model/hooks/useConference";
import { useQueryConferenceBySlideIdQuery } from "../../src/generated/graphql";
import ConferenceInfoModalButton from "../conference/ConferenceInfoModalButton";

interface Props {
    slideId: number
}

export default (props: Props) => {
    const router = useRouter()
    const { slideId } = props
    const { data, loading, error } = useQueryConferenceBySlideIdQuery({ variables: { slideId } })
    const latestConference = data?.slideshare_Conference.at(0)


    const goPresentation = () => {
        router.push(`/presentation/${slideId}`)
    }

    const renderConference = () => {
        if (latestConference) {
            if (new Date(latestConference.endDate) > new Date()) {
                return <>
                    <Button onClick={goPresentation}>Open Presentation Mode</Button>
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