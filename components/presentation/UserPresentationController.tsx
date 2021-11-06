import { Stack } from "@mui/material";
import React from "react";
import UserActionButtons from "./UserActionButtons";

interface Props {

}

export default (props: Props) => {
    return <>
        <Stack direction="row" spacing={2}>
            <UserActionButtons />
        </Stack>
    </>
}