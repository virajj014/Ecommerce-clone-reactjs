import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [emailmobile, setEmailMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const onsubmit = (data) => {
    navigate('/')
  }

  return (
    <div className='signup-container'>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" // Replace with your logo URL
        alt='Amazon logo'
        className='amazon-logo'
      />
      <div className='signup-box'>
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input id='password'
              {...register('email',
                {
                  required: 'Email is required',

                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, // Email pattern regex
                    message: 'Please enter a valid email address'
                  }
                }
              )}
              placeholder='Enter Email'
            />
            {errors.email && <p>{errors.email.message}</p>}

          </div>

          <div className='input-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password'
              {...register('password',
                {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Passwords must be at least 6 characters'
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, // Password regex (lowercase, uppercase, number, special char)
                    message: 'Password must contain at least one uppercase letter, one number and one special character'
                  }
                }
              )}
              placeholder='Enter Password'

            />
            {errors.password && <p>{errors.password.message}</p>}

          </div>


          <button className='verify-button' onClick={handleSubmit(onsubmit)}>Continue</button>
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