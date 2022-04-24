import React, { useRef, useState } from 'react'
import './register.css'
const Register = () => {
    const [email, setEmail] = useState("");
    const [pass, setpass] = useState("");

    const emailRef = useRef();
    const passRef = useRef();

    const handlerEmail = () =>{
        setEmail(emailRef.current.value)
    }
    const handlerpass = () =>{
        setpass(emailRef.current.value)
    }

  return (
    <div className='register'>
        <div className='top'>
            <div className='wrapper'>
                <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt=''/>
                <button className='loginButton'>Sign In</button>
            </div>
            
        </div>
        <div className='registerContainer'>
            <h1>Unlimited movies, TV <br/> shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            {!email?
                <div className='input'>
                <input className='inputReg' type="text" placeholder='Email Address' ref={emailRef} />
                <button className='registerbutton' onClick={handlerEmail}>Get Started</button>
            </div>:
            <form className='input'>
            <input className='inputReg'  type="password" placeholder='password' ref={passRef} />
            <button className='registerbutton' onClick={handlerpass}>Get Started</button>
        </form>

                
            }
            
        </div>
    </div>
  )
}

export default Register