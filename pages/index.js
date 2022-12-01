import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'

 const index = () => {
  return (

    <React.Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <div className='d-flex flex-row justify-content-center align-items-center'>

        <div>
          <Image src="/login.PNG" alt="login instagram" width={400} height={600}></Image>
        </div>

        <div>
            <form>
              <label>Enter Your Email : </label> <br></br>
              <input type="text"></input>
            </form>

            <Button style={{backgroundColor:"red", outline:"none"}}><a href='/home'>LogIn</a></Button>

        </div>
      </div>

    </React.Fragment>
  )
}

export default index
