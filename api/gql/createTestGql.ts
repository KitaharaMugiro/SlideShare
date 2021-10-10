import { gql } from "@apollo/client";

export default gql`
            mutation MyMutation($test: String!) {
                insert_slideshare_Test_one(object:{test:$test}) {
                    id
                    text
                    test
                }   
        }
        `
