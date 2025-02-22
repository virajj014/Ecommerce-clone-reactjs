import React from 'react'
import FooterLinks from './FooterLinks'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { CiGlobe } from 'react-icons/ci'
import './Footer.css'

const Footer = () => {

  return (
    <div className='footer'>
      <div className='back-to-top'>
        <a href='#top'>Back to top</a>
      </div>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>Get to know Us</h3>
          <ul>
            <li><a href='#'>About Amazon</a></li>
            <li><a href='#'>Careers</a></li>
            <li><a href='#'>Press Releases</a></li>
            <li><a href='#'>Amazon Science</a></li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>Connect with Us</h3>
          <ul>
            <li><a href='#'>Facebook</a></li>
            <li><a href='#'>Twitter</a></li>
            <li><a href='#'>Instagram</a></li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>Make money with us</h3>
          <ul>
            <li><a href='#'>Sell on Amazon</a></li>
            <li><a href='#'>Sell under Amzon Accelerator</a></li>
            <li><a href='#'>Protect and Build Your Brand</a></li>
            <li><a href='#'>Amazon Global Selling</a></li>
            <li><a href='#'>Supply to Amazon</a></li>
            <li><a href='#'>Become an Affiliate</a></li>
            <li><a href='#'>Fulfillment by Amazon</a></li>
            <li><a href='#'>Advertise Your Products</a></li>
            <li><a href='#'>Amazon Pay on Merchants</a></li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>Let Us Help You</h3>
          <ul>
            <li><a href='#'>Your Account</a></li>
            <li><a href='#'>Returns Center</a></li>
            <li><a href='#'>Recalls and Product Safety Alerts</a></li>
            <li><a href='#'>100% Purchase Protection</a></li>
            <li><a href='#'>Amazon App Download</a></li>
            <li><a href='#'>Help</a></li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <img src={logo} onClick={() => window.location.href = '/'} className='logo' />

        <div className='footer-buttons'>
          <button className='language-btn'><CiGlobe /> English</button>
          <button className='country-btn'>
            <img src='https://flagcdn.com/w320/in.png' alt='' className='flag-icon' />
            India</button>

        </div>
      </div>


      <FooterLinks />
    </div>
  )
}

export default Footer