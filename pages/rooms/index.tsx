
import { GetServerSideProps, GetStaticPropsContext } from "next";
import React from "react";
import RoomTemplate from "../../components/rooms/RoomTemplate";
import OgpTag, { OpgMetaData } from "../../model/ogp/OgpTag";
import getOgpInfo from "../../model/serverSideRender/getOgpInfo";

export default ({ ogpInfo }: { ogpInfo: OpgMetaData }) => {
    return <div>
        <OgpTag ogpInfo={ogpInfo} />

        <RoomTemplate />
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
