import React from 'react';
import { useEffect,useState } from 'react';
import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE } from '../../constants/Constans';
import '../../styles/login.scss';
import { Logo } from '../atoms/logo/Logo';



const Login = () => {
  
  const rout = (e) => {
    window.open(`${AUTH_ENDPOINT}/authorize?client_id=${CLIENT_ID}&scope=user-read-private,user-read-email,playlist-modify-public,user-library-read,user-library-modify&show_dialog=true&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`,"_self")
  }
  return (
    <section className='login container-fluid' >
      <article className='row g-0'>
        {/* <figure className="login-image text-center">
          <img src='/assets/logo-spotify.png' className='elevation-3'/>
        </figure> */}
        <Logo />
        <article className=" text-center">
          <div className='login-title'>
            <h1> My music app </h1>
            <a  className=' btn btn-outline-primary btn-lg button-login' onClick={rout}>Login</a>
          </div>
        </article>
      </article>
    </section>
  )
}

export default Login;