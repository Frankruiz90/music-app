import React from 'react';
import { useEffect,useState } from 'react';
import '../../styles/login.scss';



const Login = () => {
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const CLIENT_ID = 'de8a029d0f12487ebbced080fe7527e3';
  const REDIRECT_URI = 'http://localhost:3000/favorites';
  const RESPONSE_TYPE = 'token'

  
  

  const rout = (e) => {
    window.open(`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`,"_self")
  }
  return (
    <section className='login container-fluid' >
      <article className='row g-0'>
        <figure className="login-image text-center">
          <img src='/assets/logo-spotify.png' className='elevation-3'/>
        </figure>
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