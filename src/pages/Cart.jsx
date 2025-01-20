import React from 'react'
import './Cart.css'
import Navbar from '../components/Navbar'
import NavbarList from '../components/NavbarList'
import product1 from '../assets/products2/p1.jpg'

const Cart = () => {
  return (
    <div className='fullpage'>
      <Navbar />
      <NavbarList />
      <div className='cart'>
        <div className='cartData'>
          <h1>Shopping Cart</h1>
          <div className='row'>
            <span className='link'>Deselect all items</span>
            <span className='t2'>Price</span>
          </div>
          <div className='hr'></div>
          <div className='cartItem'>
            <input type='checkbox' />
            <img src={product1} />
            <div className='details'>
              <h2>Product 1</h2>
              <span className='stock'>In stock</span>
              <span className='normal'>Sold by <span className='link'>xyz detail</span></span>
              <span className='normal'>Amazon Delivered</span>
              <span className='incrementdecrement'>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </span>
            </div>
            <span className='price'>Rs. 10,000</span>

          </div>
          <div className='cartItem'>
            <input type='checkbox' />
            <img src={product1} />
            <div className='details'>
              <h2>Product 2</h2>
              <span className='stock'>In stock</span>
              <span className='normal'>Sold by <span className='link'>xyz detail</span></span>
              <span className='normal'>Amazon Delivered</span>
              <span className='incrementdecrement'>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </span>
            </div>
            <span className='price'>Rs. 20,000</span>

          </div>
        </div>
        <div className='cartTotal'>
          <h1>Subtotal: <span>Rs. 30,000</span></h1>
          <button>Proceed to Buy</button>
        </div>
      </div>
    </div>
  )
}

export default Cart