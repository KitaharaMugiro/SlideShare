import { useAtom } from "jotai";
import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import PresentationTemplate from "../../components/presentation/PresentationTemplate";
import { DarkModeAtom } from "../../model/jotai/DarkMode";
import OgpTag, { OpgMetaData } from "../../model/ogp/OgpTag";
import getOgpInfo from "../../model/serverSideRender/getOgpInfo";

const Page = ({ ogpInfo }: { ogpInfo: OpgMetaData }) => {
    const [_, setThemeMode] = useAtom(DarkModeAtom)

    useEffect(() => {
        setThemeMode("dark")
    }, [])

    return <>
        <OgpTag ogpInfo={ogpInfo} />
        <PresentationTemplate />
    </>
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


export default Page