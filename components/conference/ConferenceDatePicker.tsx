import { DateTimePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import React, { useState } from "react";

interface Props {
    value: Date
    onChange: (date: Date) => void
}

export default (props: Props) => {
    return (
        <>
            <DateTimePicker
                renderInput={(params) => <TextField {...params} />}
                value={props.value}
                onChange={(newValue) => {
                    if (newValue) {
                        props.onChange(newValue)
                    }
                }}
                InputProps={{
                    style: { color: "white" }
                }}
            />
        </>
    );
}