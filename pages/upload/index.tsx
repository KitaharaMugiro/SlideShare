import { Button, Divider, Typography } from "@mui/material"
import { height } from "@mui/system"
import React from "react"
import Dragzone from "../../components/upload/PdfUploader"
import style from "./index.module.css"
import { Storage } from "aws-amplify"
const Home = () => {
    const onClickTest = async () => {
        const result = await Storage.put('test.txt', 'Hello');
    }
    return (<>

        <div className={style.center}>
            <div style={{ height: 30 }} />
            <Typography variant="h2">Upload a new PDF</Typography>
            <div style={{ height: 30 }} />
            <Dragzone />

            <div style={{ height: 30 }} />
            <Divider flexItem>
                OR
            </Divider>
            <div style={{ height: 20 }} />

            <Button href="/edit">Start with blank</Button>

            <Button onClick={onClickTest}>test</Button>
        </div>
    </>)
}

export default Home