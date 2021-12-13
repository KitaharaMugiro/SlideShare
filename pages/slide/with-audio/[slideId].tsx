import { GetServerSideProps } from "next";
import { useTranslations } from "next-intl";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import StaticSlideView from "../../../components/slideview/StaticSlideView";
import StaticSlideViewWithAudio from "../../../components/slideview/StaticSlideViewWithAudio";
import OgpTag, { OpgMetaData } from "../../../model/ogp/OgpTag";
import getOgpInfo from "../../../model/serverSideRender/getOgpInfo";
import { useLoading } from "../../../model/util-hooks/useLoading";
import useUser from "../../../model/util-hooks/useUser";
import { useQuerySlideQuery } from "../../../src/generated/graphql";
import style from "./style.module.css";
const Page = ({ ogpInfo }: { ogpInfo: OpgMetaData }) => {
    const t = useTranslations('Slide');

    const router = useRouter()
    const { slideId } = router.query

    const { user } = useUser()
    const [isAdmin, setIsAdmin] = useState(false)
    const { startLoading, finishLoading } = useLoading()

    //データ取得
    const { loading, error, data: initialSlide } = useQuerySlideQuery({ variables: { slideId: Number(slideId) }, fetchPolicy: "no-cache" })
    const slide = initialSlide?.slideshare_Slide_by_pk

    useEffect(() => {
        if (loading) {
            startLoading()
        } else {
            finishLoading()
        }
    }, [loading])

    useEffect(() => {
        //TODO: Realtimely側をsecureにしないと意味ない
        if (slide && user) {
            if (slide?.createdBy === user?.attributes.sub) {
                setIsAdmin(true)
            }
        }
    }, [user, slide])

    if (loading) return <div><OgpTag ogpInfo={ogpInfo} /></div>
    if (error) return <div>{JSON.stringify(error)}</div>
    if (!slide) return <div>{t("not-found")}</div>
    return (
        <div className={style.main}>
            <OgpTag ogpInfo={ogpInfo} />
            <StaticSlideViewWithAudio initialSlide={initialSlide} isAdmin={isAdmin} />
            <div style={{ height: 30 }} />
        </div>
    )
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

export default Page