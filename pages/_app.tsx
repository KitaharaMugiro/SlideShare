import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Amplify, { Auth } from 'aws-amplify';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import MyApolloClient from '../api/MyApolloClient';
import MyAppBar from '../components/common/MyAppBar';
import MyBackdrop from '../components/common/MyBackdrop';
import useUser from '../model/hooks/useUser';
import awsConfig from '../src/aws-exports';

//material ui font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'
// used for collection views (optional)
import 'rc-dropdown/assets/index.css'
// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
import '../styles/globals.css';


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
  const { setUser } = useUser()
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        setUser(user)
      } catch {
        console.log("No User info")
      }
    }
    getUser()
  }, [])

  const darkModePathList = ["/slide", "/presentation"]
  const isDark = darkModePathList.reduce((acc, cur) => acc || router.pathname.includes(cur), false)
  const darkTheme = createTheme({
    palette: {
      mode: isDark ? 'dark' : "light",
    },
  });

  return <>
    <ApolloProvider client={MyApolloClient}>
      <ThemeProvider theme={darkTheme}>
        <MyAppBar />
        <MyBackdrop />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  </>
}
export default MyApp
