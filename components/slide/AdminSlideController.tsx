import { Button, Stack } from "@mui/material";
import { useRouter } from "next/dist/client/router";
import React from "react";
import ConferenceInfoModalButton from "../conference/ConferenceInfoModalButton";

interface Props {

}

export default (props: Props) => {
    const router = useRouter()
    const { slideId } = router.query

    const goPresentation = () => {
        router.push(`/presentation/${slideId}`)
    }

    return <>
        <Stack direction="row" spacing={2}>
            <ConferenceInfoModalButton slideId={Number(slideId)} />
        </Stack>
    </>
}