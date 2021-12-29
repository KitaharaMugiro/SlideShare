import Auth from "@aws-amplify/auth"
import { Button, Divider, Typography } from "@mui/material"
import { TypeInfo } from "graphql"
import { useRouter } from "next/dist/client/router"
import React, { useEffect } from "react"
import PdfUploader from "../../components/upload/PdfUploader"
import { useLoading } from "../../model/util-hooks/useLoading"
import useSignin from "../../model/util-hooks/useSignin"
import { createNewPage, Page } from "../../model/Page"
import { Slideshare_PageType_Enum, useCreateSlideMutation, useInsertPageMutation, useUploadPdfMutation } from "../../src/generated/graphql"
import style from "./index.module.css"
import { GetServerSideProps } from "next"
import getOgpInfo from "../../model/serverSideRender/getOgpInfo"
import OgpTag, { OpgMetaData } from "../../model/ogp/OgpTag"
const Home = ({ ogpInfo }: { ogpInfo: OpgMetaData }) => {
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
            const newPage = createNewPage(slideId) as any //TODO: anyを使わない方法を知りたい
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
        <OgpTag ogpInfo={ogpInfo} />

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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = JSON.parse(JSON.stringify(await import(`../../messages/${context.locale}.json`)))
    return {
        ...getOgpInfo(context),
        props: {
            messages: data
        }
    }
}

export default Home