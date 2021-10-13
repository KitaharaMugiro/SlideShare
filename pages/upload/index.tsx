import { Button, Divider, Typography } from "@mui/material"
import { height } from "@mui/system"
import { useRouter } from "next/dist/client/router"
import React from "react"
import Dragzone from "../../components/upload/PdfUploader"
import { useCreateSlideMutation } from "../../src/generated/graphql"
import style from "./index.module.css"
const Home = () => {
    const [createNewSlide] = useCreateSlideMutation()
    const router = useRouter()

    const onClickNew = async () => {
        const createdSlide = await createNewSlide()
        const slideId = createdSlide.data?.insert_slideshare_Slide_one?.id
        if (!slideId) { return }
        router.push(`/edit/${slideId}`)
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

            <Button onClick={onClickNew}>Start with blank</Button>
        </div>
    </>)
}

export default Home