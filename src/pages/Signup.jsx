import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'; // Import React Hook Form

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); // useForm hook
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
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
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}> {/* Add onSubmit handler */}
          <div className="input-group">
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              {...register('name', { required: 'Name is required' })} // Validation
              placeholder="First and last name"
            />
            {errors.name && <p>{errors.name.message}</p>} {/* Error message */}
          </div>

          <div className="input-group">
            <label htmlFor="mobile">Mobile Number</label>
            <div className="mobile-input">
              <span>IN +91</span>
              <input
                type="tel"
                id="mobile"
                {...register('mobile', { required: 'Mobile number is required' })} // Validation
                placeholder="Enter mobile number"
              />
            </div>
            {errors.mobile && <p>{errors.mobile.message}</p>} {/* Error message */}
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

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              {...register('email', { 
                required: 'Email is required', 
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, // Email pattern regex
                  message: 'Please enter a valid email address'
                }
              })}
              placeholder="Enter a valid email"
            />
            {errors.email && <p>{errors.email.message}</p>} {/* Error message */}
          </div>

          <button className="verify-button" type="submit">Verify mobile number</button>

          <div className="hr"></div>
          <div className="business-account">
            <label>Buying for work?</label>
            <a href="#">Create a free business account</a>
          </div>

          <div className="hr"></div>
          <div className="login-link">
            <p>Already have an account?</p>
            <a onClick={() => navigate('/login')}>Sign in</a>
          </div>

          <p className="terms">
            By creating an account or logging in, you agree to Amazon's{' '}
            <a href="#">Conditions of Use</a> and <a href="#">Privacy Policy</a>
          </p>
          <div className="hr"></div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
