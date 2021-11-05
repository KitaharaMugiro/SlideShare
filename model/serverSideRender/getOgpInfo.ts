import { gql } from "@apollo/client";
import MyApolloClient from "../../api/MyApolloClient";
import { Storage } from "aws-amplify"

export default async function getServerSideProps(context: any) {
    const { slideId } = context.query;
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
    return {
        props: {
            imageUrl: signedURL,
        },
    };
}