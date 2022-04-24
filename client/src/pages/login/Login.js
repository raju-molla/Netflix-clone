import React, { useRef, useState } from 'react'
import './login.css'
const Login = () => {


  return (
    <div className='login'>
        <div className='top'>
            <div className='wrapper'>
                <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt=''/>
            </div> 
        </div>
        <div className='loginContainer'>
            <div className='conteinerWrapper'>
                <h2>Sign In</h2>
                <div className='loginInput'>
                    <input className='logInput' type="email" placeholder='Email or Phone number'/>
                    <br />
                    <input className='logInput' type="password" placeholder='Password'/>
                    <br />
                    <button  className='Button'>Sign In</button>
                </div>
                <span>New to Netflix?<span className='learnMore'> Sign Up now.</span></span>
                <span>This page is protected by google reCapTHCA to ensure you are not bot. <span className='learnMore'>Learn more</span></span>
            </div>
        </div>
        
    </div>
  )
}

export default Login