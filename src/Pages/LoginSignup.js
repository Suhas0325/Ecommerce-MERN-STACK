import React from 'react'
import './Pagecss/loginSignup.css'
import chrome from '../Components/Assets/chrome_logo.webp'

const LoginSignup = () => {
  return (
    <div className='Page'>
      <div className='pog'>
      <h1>Sign In</h1>
      <form className='suh'>
        <input type='text' placeholder='Enter Your Mobile Number' className='login'></input>
        <button class='GETNum'>GET OTP!</button>
      </form>
      
      </div>
      <p>---or---</p>
      <div className='continue'>
        <img src={chrome}></img>
      <p>Continue with google</p>
      </div>
    </div>
  )
}

export default LoginSignup
