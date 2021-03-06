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
        if (!res) {
            //スライドがない場合
            const ogpInfo: OpgMetaData = {
                pageTitle: "続きを読む",
                pageDescription: "スライドの続きを読むことができます",
                pageImg: "https://presen-share.yunomy.com/static/default_slide.png"
            }
            return {
                ogpInfo
            };
        }
        const imageUrl = 1 === res.Pages.length ? res.Pages[0]?.imageUrl : undefined;
        let signedURL = "https://presen-share.yunomy.com/static/default_slide.png"
        if (imageUrl) {
            signedURL = await Storage.get(imageUrl);
        }
        const ogpInfo: OpgMetaData = {
            pageTitle: "続きを読む",
            pageDescription: "スライドの続きを読むことができます",
            pageImg: signedURL
        }
        return {
            ogpInfo
        };
    }

    //スライドがない場合
    const ogpInfo: OpgMetaData = {
        pageTitle: "PresenShare",
        pageDescription: "スライドをアップロードしてプレゼンを開始しよう",
        pageImg: "https://presen-share.yunomy.com/static/default_ogp.png"
    }
    return {
        ogpInfo
    };
}