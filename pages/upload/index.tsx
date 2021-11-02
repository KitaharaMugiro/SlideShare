import Auth from "@aws-amplify/auth"
import { Button, Divider, Typography } from "@mui/material"
import { TypeInfo } from "graphql"
import { useRouter } from "next/dist/client/router"
import React, { useEffect } from "react"
import PdfUploader from "../../components/upload/PdfUploader"
import { useLoading } from "../../model/hooks/useLoading"
import useSignin from "../../model/hooks/useSignin"
import { createNewPage, Page } from "../../model/Page"
import { Slideshare_PageType_Enum, useCreateSlideMutation, useInsertPageMutation, useUploadPdfMutation } from "../../src/generated/graphql"
import style from "./index.module.css"
const Home = () => {
    const [createNewSlide] = useCreateSlideMutation()
    const [createPageMutation] = useInsertPageMutation()
    const [uploadPdf] = useUploadPdfMutation()
    const { startLoading, finishLoading } = useLoading("このまま30秒ほどお待ちください")
    const router = useRouter()
    const { goSignin } = useSignin()

    useEffect(() => {
        Auth.currentAuthenticatedUser().catch(() => {
            goSignin()
        })
    }, [])

    const onClickNew = async () => {
        const createdSlide = await createNewSlide()
        const slideId = createdSlide.data?.insert_slideshare_Slide_one?.id
        if (!slideId) { return }
        router.push(`/edit/${slideId}`)
    }

    const onSuccessUpload = async (key: string) => {
        startLoading()
        const response = await uploadPdf({ variables: { pdfName: key } })
        const pngList = response.data?.uploadPdf?.keys
        if (!pngList) { return }
        const createdSlide = await createNewSlide()
        const slideId = createdSlide.data?.insert_slideshare_Slide_one?.id
        if (!slideId) { return }
        let pageNumber = 0
        const promises = []
        for (const imageUrl of pngList) {
            const newPage = createNewPage() as any //TODO: anyを使わない方法を知りたい
            newPage.type = Slideshare_PageType_Enum.Image
            newPage.imageUrl = imageUrl
            newPage.pageNumber = pageNumber
            pageNumber += 1
            const promise = createPageMutation({ variables: { object: { ...newPage, slideId } } })
            promises.push(promise)
        }
        await Promise.all(promises)
        router.push(`/edit/${slideId}`)
        finishLoading()
    }

    return (<>

        <div className={style.center}>
            <div style={{ height: 30 }} />
            <Typography variant="h2" textAlign="center">Upload your PDF</Typography>
            <div style={{ height: 30 }} />
            <PdfUploader onSuccessUpload={onSuccessUpload} />

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