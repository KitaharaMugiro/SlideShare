import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import MyAppBar from '../components/common/MyAppBar'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <>
    <MyAppBar />
    <Component {...pageProps} />
  </>
}
export default MyApp
