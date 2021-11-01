import { Button, Paper, Typography } from '@mui/material'
import type { NextPage } from 'next'
import React from 'react'
import styles from './index.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.heroine}>
        <div className={styles.center}>
          <Paper elevation={3} style={{ margin: 40, padding: 40 }}>
            <Typography variant="h3">勉強会を開こう</Typography>
            <Typography className={styles.lead}>まずはスライドをアップロードして始めよう</Typography>

            <Button
              variant="contained"
              color="primary"
              href="/upload"
              disableElevation
              style={{ marginTop: 40 }} >
              Upload your slide</Button>
          </Paper>
        </div>
      </div>

      {/* ここにおすすめの勉強会、もしくは直近の勉強会を載せる */}
    </div>
  )
}

export default Home
