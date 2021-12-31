import { Button, Paper, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import type { GetServerSideProps, GetStaticPropsContext, NextPage } from 'next'
import { useTranslations } from 'next-intl'
import React, { useEffect } from 'react'
import { DarkModeAtom } from '../model/jotai/DarkMode'
import OgpTag, { OpgMetaData } from '../model/ogp/OgpTag'
import getOgpInfo from '../model/serverSideRender/getOgpInfo'

import styles from './index.module.css'

const Home = ({ ogpInfo }: { ogpInfo: OpgMetaData }) => {
  const [_, setThemeMode] = useAtom(DarkModeAtom)

  useEffect(() => {
    setThemeMode("light")
  }, [])
  const t = useTranslations('Home');
  return (
    <div>
      <OgpTag ogpInfo={ogpInfo} />

      <div className={styles.heroine}>
        <div className={styles.center}>
          <Paper elevation={3} style={{ margin: 40, padding: 40 }}>
            <Typography variant="h3">{t("hero-message")}</Typography>
            <Typography className={styles.lead}>{t("hero-description")}</Typography>

            <Button
              variant="contained"
              color="primary"
              href="/upload"
              disableElevation
              style={{ marginTop: 40 }} >
              {t("hero-button")}</Button>
          </Paper>
        </div>
      </div>

      {/* ここにおすすめの勉強会、もしくは直近の勉強会を載せる */}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = JSON.parse(JSON.stringify(await import(`../messages/${context.locale}.json`)))
  const ogpInfo = await getOgpInfo(context)
  return {

    props: {
      ...ogpInfo,
      messages: data
    }
  }
}

export default Home
