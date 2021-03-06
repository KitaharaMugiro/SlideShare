
import { useAtom } from "jotai";
import { GetServerSideProps, GetStaticPropsContext } from "next";
import React, { useEffect } from "react";
import RoomAndPresentationTemplate from "../../components/rooms/RoomAndPresentationTemplate";
import { DarkModeAtom } from "../../model/jotai/DarkMode";
import OgpTag, { OpgMetaData } from "../../model/ogp/OgpTag";
import getOgpInfo from "../../model/serverSideRender/getOgpInfo";

export default ({ ogpInfo }: { ogpInfo: OpgMetaData }) => {
    const [_, setThemeMode] = useAtom(DarkModeAtom)
    useEffect(() => {
        setThemeMode("light")
    }, [])

    return <div>
        <OgpTag ogpInfo={ogpInfo} />
        <RoomAndPresentationTemplate />
    </div>
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
