import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import MyAppBar from '../components/common/MyAppBar'
import Amplify, { Auth, Storage } from 'aws-amplify';
import awsConfig from '../src/aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { useAtom } from 'jotai';
import { UserAtom } from '../model/jotai/User';

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
    <MyAppBar />
    <Component {...pageProps} />
  </>
}
export default withAuthenticator(MyApp)
