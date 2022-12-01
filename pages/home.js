import Head from 'next/head'
import React from 'react'
import MainHome from '../components/MainHome'

 const index = () => {
  return (

    <React.Fragment>
      <Head>
        <title>Instagram</title>
      </Head>

      <MainHome/>
    </React.Fragment>
  )
}

export default index
