import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import MyAppBar from '../components/common/MyAppBar'
import Amplify, { Auth, Storage } from 'aws-amplify';
import awsConfig from '../src/aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { useAtom } from 'jotai';
import { UserAtom } from '../model/jotai/User';
import { ApolloProvider } from '@apollo/client';
import MyApolloClient from '../api/MyApolloClient';

function findUrlForEnv(urlStrings: Array<string>, isLocal: boolean): string {
  if (urlStrings.length === 1) return urlStrings[0];

  const re: RegExp = isLocal ? /^http:\/\/localhost/ : /^https:\/\//;
  const [url]: Array<URL> = urlStrings
    .filter((urlString) => urlString.match(re))
    .map((urlString) => new URL(urlString));
  if (!url) throw new Error("No valid URL found: " + urlStrings.join(","));
  return url.href;
}

function isDevelopment() {
  const { NODE_ENV } = process.env;
  return NODE_ENV === "development";
}

const redirectSignIn = findUrlForEnv(
  awsConfig.oauth.redirectSignIn.split(","),
  isDevelopment()
);

awsConfig.oauth.redirectSignIn = redirectSignIn
awsConfig.oauth.redirectSignOut = redirectSignIn
Amplify.configure(awsConfig);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [_, setUser] = useAtom(UserAtom)

  useEffect(() => {
    const getUser = async () => {
      const user = await Auth.currentAuthenticatedUser()
      setUser(user)
    }
    getUser()
  }, [])

  return <>
    <ApolloProvider client={MyApolloClient}>
      <MyAppBar />
      <Component {...pageProps} />
    </ApolloProvider>
  </>
}
export default MyApp
