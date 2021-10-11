import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, split } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from "@apollo/client/utilities";
import Amplify, { Auth } from 'aws-amplify';

const uri = "https://adequate-guinea-56.hasura.app/v1/graphql"
const httpLink = new HttpLink({ uri });
const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = await Auth.currentSession()
    console.log({ token })

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token.getIdToken().getJwtToken()}`,
        }
    }
});

const MyApolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});
export default MyApolloClient;

