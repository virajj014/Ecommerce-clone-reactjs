import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'; // Import React Hook Form

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); // useForm hook
  const [emailmobile, setEmailMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
    navigate('/');
  };

  return (
    <div className="signup-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
        alt="Amazon logo"
        className="amazon-logo"
      />
      <div className="signup-box">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit(onSubmit)}> {/* Add onSubmit handler */}
          <div className="input-group">
            <label htmlFor="emailmobile">Email or mobile phone number</label>
            <input
              id="emailmobile"
              {...register('emailmobile', { 
                required: 'Email or mobile is required', 
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, // Email pattern regex
                  message: 'Please enter a valid email address'
                }
              })} 
              placeholder="Enter email or phone"
            />
            {errors.emailmobile && <p>{errors.emailmobile.message}</p>} {/* Error message */}
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register('password', { 
                required: 'Password is required', 
                minLength: { 
                  value: 6, 
                  message: 'Password must be at least 6 characters' 
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, // Password regex (lowercase, uppercase, number, special char)
                  message: 'Password must contain at least one uppercase letter, one number, and one special character'
                }
              })} // Password validation
              placeholder="Passwords must be at least 6 characters"
            />
            {errors.password && <p>{errors.password.message}</p>} {/* Error message */}
          </div>

          <button className="verify-button" type="submit">Continue</button>

          <p className="terms">
            By continuing, you agree to Amazon's{' '}
            <a href="#">Conditions of Use</a> and <a href="#">Privacy Policy</a>
          </p>

          <div className="hr"></div>
          <div className="business-account">
            <label>Buying for work?</label>
            <a href="#">Shop on Amazon Business</a>
          </div>

          <p className="terms">
            Don't have an account?{' '}
            <a onClick={() => navigate('/signup')}>Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
