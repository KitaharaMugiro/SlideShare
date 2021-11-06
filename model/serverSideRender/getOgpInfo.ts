import { gql } from "@apollo/client";
import MyApolloClient from "../../api/MyApolloClient";
import { Storage } from "aws-amplify"
import { OpgMetaData } from "../ogp/OgpTag";


export default async function getServerSideProps(context: any) {
    const { slideId } = context.query;

    //スライドがある場合
    if (slideId) {
        const { data } = await MyApolloClient.query({
            query: gql`
                query querySlide($slideId: Int!) {
                    slideshare_Slide_by_pk(id: $slideId) {
                        Pages(where: {pageNumber: {_eq: 0}}, limit: 1) {
                        imageUrl
                        }
                    }
                }
          `,
            variables: {
                slideId: slideId,
            },
        });
        const res = data.slideshare_Slide_by_pk;
        const imageUrl = 1 === res.Pages.length ? res.Pages[0].imageUrl : "";
        const signedURL = await Storage.get(imageUrl);
        const ogpInfo: OpgMetaData = {
            pageTitle: "PresenShare",
            pageDescription: "プレゼン公開中",
            pageImg: signedURL
        }
        console.log("b : " + ogpInfo)
        return {
            props: {
                ogpInfo
            },
        };
    }

    //スライドがない場合
    const ogpInfo: OpgMetaData = {
        pageTitle: "PresenShare",
        pageDescription: "スライドをアップロードしてプレゼンを開始しよう",
        pageImg: "/static/default_ogp.png"
    }
    console.log("a : " + ogpInfo)
    return {
        props: {
            ogpInfo
        },
    };
}