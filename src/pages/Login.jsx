import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [emailmobile, setEmailMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  return (
    <div className='signup-container'>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" // Replace with your logo URL
        alt='Amazon logo'
        className='amazon-logo'
      />
      <div className='signup-box'>
        <h2>Sign in</h2>
        <form>
          <div className='input-group'>
            <label htmlFor='emailmobile'>Email or mobile phone number</label>
            <input id='emailmobile' value={emailmobile} onChange={(e) => setEmailMobile(e.target.value)}
              placeholder='Enter email or phone' />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder='Passwords must be at least 6 characters' />
          </div>
          <button className='verify-button' onClick={() => navigate('/')}>Continue</button>
          <p className='terms'>
            By continuing, you agree to Amazon's{' '}
            <a href='#'>Conditions of Use</a> and <a href='#'>Privacy Policy</a>
          </p>
          <div className='hr'></div>
          <div className='business-account'>
            <label>Buying for work?</label>
            <a href='#'>Shop on Amazon Business</a>
          </div>
          <p className='terms'>
            Don't have an account?{' '}
            <a onClick={() => navigate('/signup')}>Create an account</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login