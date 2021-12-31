import { Button, Typography } from "@mui/material";
import { Auth } from 'aws-amplify';
import { useAtom } from "jotai";
import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import SlideCard from "../../components/slide/SlideCard";
import { DarkModeAtom } from "../../model/jotai/DarkMode";
import OgpTag, { OpgMetaData } from "../../model/ogp/OgpTag";
import getOgpInfo from "../../model/serverSideRender/getOgpInfo";
import useMySlidePagenation from "../../model/util-hooks/useMySlidePagenation";
import useSignin from "../../model/util-hooks/useSignin";

//TODO: Pagenationをhooksに落とし込めないかな
export default ({ ogpInfo }: { ogpInfo: OpgMetaData }) => {

    const [_, setThemeMode] = useAtom(DarkModeAtom)

    useEffect(() => {
        setThemeMode("light")
    }, [])

    const { localSlides, onDeleteCard, loadMore } = useMySlidePagenation()
    const { goSignin } = useSignin()
    useEffect(() => {
        Auth.currentAuthenticatedUser().catch(() => {
            goSignin()
        })
    }, [])

    const renderCards = () => {
        return localSlides?.slideshare_Slide.map((slide) => {
            return <div key={slide.id} style={{ margin: 30 }}>
                <SlideCard
                    slideId={slide.id}
                    imageUrl={slide.Pages ? slide.Pages[0]?.imageUrl : undefined}
                    onDeleteCard={onDeleteCard}
                    linkTo="slide"
                    actionMode="mypage"
                    uploading={slide.status === "uploading"}
                />
            </div>
        })
    }

    return (
        <div>
            <OgpTag ogpInfo={ogpInfo} />
            <Typography variant="h1" style={{ marginLeft: 30 }}>Slides</Typography>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {renderCards()}
            </div>
            <Button onClick={loadMore}>さらに読み込む</Button>
        </div>
    );
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
