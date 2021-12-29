
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

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    const data = JSON.parse(JSON.stringify(await import(`../../messages/${locale}.json`)))
    return {
        props: {
            messages: data
        }
    };
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
