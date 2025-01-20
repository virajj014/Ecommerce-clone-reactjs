import React from 'react'
import './NavbarList.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaCaretDown } from 'react-icons/fa'

const NavbarList = () => {
  return (
    <div className='navbarList'>
      <p><RxHamburgerMenu /> All</p>
      <p>MX Player</p>
      <p>Sell</p>
      <p>Amazon Pay</p>
      <p>Gift Cards</p>
      <p>Buy Again</p>
      <p>AmazonBasics</p>
      <p>Gift Ideas</p>
      <p>Today's Deals</p>
      <p>Customer Service</p>
      <p>Browsing History <FaCaretDown /></p>
      <p>Viraj's Amazon.in</p>
      <p>Mobiles</p>
      <p>Subscribe & Save</p>
      <p>Home Improvement</p>
      <p>Health, Household & Personal Care</p>
      <p>Books</p>
      <p>New Releases</p>
      <p>Best Sellers</p>
      <p>Home & Kitchen</p>
      <p>Prime</p>
      <p>Electronics</p>
      <p>Computers</p>
      <p>Toys & Games</p>
      <p>Sports, Fitness & Outdoors</p>
      <p>Beauty & Personal Care</p>
      <p>Kindle eBooks</p>
    </div>
  )
}

export default NavbarList