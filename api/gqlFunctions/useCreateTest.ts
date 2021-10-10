import createTestGql from "../gql/createTestGql";
import MyApolloClient from "../MyApolloClient";
import { useMutation } from "@apollo/client";
export default () => {
    const [create] = useMutation(
        createTestGql, { client: MyApolloClient }
    )

    return (test: string) => {
        create(
            {
                variables:
                {
                    test
                }
            })
    }
}