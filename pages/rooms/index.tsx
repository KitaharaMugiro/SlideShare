
import { GetStaticPropsContext } from "next";
import React from "react";
import RoomTemplate from "../../components/rooms/RoomTemplate";

export default () => {
    return <div>
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
