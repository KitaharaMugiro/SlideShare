import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
import MobileSlideView from "../../components/common/MobileSlideView";
import StaticSlideView from "../../components/slideview/StaticSlideView";
import { useLoading } from "../../model/hooks/useLoading";
import useUser from "../../model/hooks/useUser";
import OgpTag, { OpgMetaData } from "../../model/ogp/OgpTag";
import getOgpInfo from "../../model/serverSideRender/getOgpInfo";
import { useQuerySlideQuery } from "../../src/generated/graphql";
import style from "./style.module.css";
const Page = ({ ogpInfo }: { ogpInfo: OpgMetaData }) => {

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
    if (!slide) return <div>存在しないスライドです</div>

    if (isMobile) {
        return <MobileSlideView />
    }
    return (
        <div className={style.main}>
            <OgpTag ogpInfo={ogpInfo} />
            <StaticSlideView initialSlide={initialSlide} isAdmin={isAdmin} />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return getOgpInfo(context)
}

export default Page