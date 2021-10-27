import { Button } from '@mui/material'
import type { NextPage } from 'next'
import React from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div style={{ margin: '0.5em' }}>
        <Button variant="contained" href="/upload">Upload your slide</Button>{' '}
      </div>

    </div>
  )
}

export default Home
