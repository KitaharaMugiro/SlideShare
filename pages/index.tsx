import { Button, Paper, Typography } from '@mui/material'
import type { GetStaticPropsContext, NextPage } from 'next'
import { useTranslations } from 'next-intl'
import React from 'react'
import OgpTag from '../model/ogp/OgpTag'
import styles from './index.module.css'

const Home: NextPage = () => {
  const t = useTranslations('Home');
  return (
    <div>
      <OgpTag ogpInfo={{}} />
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

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const data = JSON.parse(JSON.stringify(await import(`../messages/${locale}.json`)))
  return {
    props: {
      messages: data
    }
  };
}

export default Home
