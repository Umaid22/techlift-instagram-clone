import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const dynamicrouting = () => {

  const router = useRouter();
  const {sno} = router.query;

  return (
    <div>
      <Head>
        <title>Dynamic routing</title>
      </Head>
      <div>
        welcome to page # {sno}
      </div>
    </div>
  )
}

export default dynamicrouting