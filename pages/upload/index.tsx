import Auth from "@aws-amplify/auth"
import { Button, Divider, Typography } from "@mui/material"
import { GetServerSideProps } from "next"
import { useRouter } from "next/dist/client/router"
import React, { useEffect } from "react"
import PdfUploader from "../../components/upload/PdfUploader"
import OgpTag, { OpgMetaData } from "../../model/ogp/OgpTag"
import getOgpInfo from "../../model/serverSideRender/getOgpInfo"
import { useLoading } from "../../model/util-hooks/useLoading"
import useSignin from "../../model/util-hooks/useSignin"
import { useCreateSlideMutation, useInsertPageMutation, useUploadPdfMutation } from "../../src/generated/graphql"
import style from "./index.module.css"
const Home = ({ ogpInfo }: { ogpInfo: OpgMetaData }) => {
    const [createNewSlide] = useCreateSlideMutation()
    const [createPageMutation] = useInsertPageMutation()
    const [uploadPdf] = useUploadPdfMutation()
    const { startLoading, finishLoading } = useLoading("")
    const router = useRouter()
    const { goSignin } = useSignin()

    useEffect(() => {
        Auth.currentAuthenticatedUser().catch(() => {
            goSignin()
        })
    }, [])

    const onClickNew = async () => {
        const createdSlide = await createNewSlide({ variables: { status: "uploaded" } })
        const slideId = createdSlide.data?.insert_slideshare_Slide_one?.id
        if (!slideId) { return }
        router.push(`/edit/${slideId}`)
    }

    const onSuccessUpload = async (key: string) => {
        startLoading()
        const createdSlide = await createNewSlide({ variables: { status: "uploading" } })
        const slideId = createdSlide.data?.insert_slideshare_Slide_one?.id
        if (!slideId) { return }

        uploadPdf({ variables: { pdfName: key, slideId } }).catch(() => {
            //タイムアウトエラーが発生するので握りつぶす
        })
        //TODO: 状況チェック
        router.push(`/mypage`)
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
    const ogpInfo = await getOgpInfo(context)
    return {

        props: {
            ...ogpInfo,
            messages: data
        }
    }
}

export default Home