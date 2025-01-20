import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
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
        <h2>Create Account</h2>
        <form>
          <div className='input-group'>
            <label htmlFor='name'>Your name</label>
            <input id='name' value={name} onChange={(e) => setName(e.target.value)}
              placeholder='First and last name'
              required
              />
          </div>

          <div className='input-group'>
            <label htmlFor='mobile'>Mobile Number</label>
           <div className='mobile-input'>
            <span>IN +91</span>
            <input type='tel' id='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)}
              placeholder='Enter mobile number'
              required
              />
           </div>
          </div>




          <div className='input-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder='Passwords must be at least 6 characters' />
          </div>


          <button className='verify-button' >Verify mobile number</button>
          <div className='hr'></div>
          <div className='business-account'>
            <label>Buying for work?</label>
            <a href='#'>Create a free business account</a>
          </div>
          <div className='hr'></div>
          <div className='login-link'>
           <p>Already have an account?</p>
            <a onClick={() => navigate('/login')}>Sign in</a>
          </div>

          <p className='terms'>
            By creating an account or logging in, you agree to Amazon's{' '}
            <a href='#'>Conditions of Use</a> and <a href='#'>Privacy Policy</a>
          </p>
          <div className='hr'></div>
         
        
        </form>
      </div>
    </div>
  )
}

export default Signup