import React, { useEffect, useState } from 'react'
import './Cart.css'
import Navbar from '../components/Navbar'
import NavbarList from '../components/NavbarList'
import product1 from '../assets/products2/p1.jpg'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { updateCartCount } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartData = async () => {
      setLoading(true)
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
     

      let fetchedProducts = [];

      for (const item of cart) {
        try {

          let res = await fetch(`https://dummyjson.com/products/${item.id}`)
          const data = await res.json();
          fetchedProducts.push({ ...data, quantity: item.quantity })
        }
        catch (error) {
          console.error("Error fetching product:", error);

        }
      }
      setCartItems(fetchedProducts)
      setLoading(false)
    }

    fetchCartData()
  }, [])

  const updateCart = (cartData) => {
    localStorage.setItem('cart', JSON.stringify(cartData));
    setCartItems(cartData)
    // console.log(updatedCart);
    updateCartCount();
  }

  const handleQuantityChange = (itemId, action) => {
    let updatedCart = [...cartItems];

    const itemIndex = updatedCart.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
      const item = updatedCart[itemIndex];
      if (action == 'increment') {
        item.quantity += 1;
      }
      else if (action == 'decrement') {
        if (item.quantity > 1) {
          item.quantity -= 1;
        }
        else {
          updatedCart = updatedCart.filter(i => i.id !== itemId);
        }
      }

      updateCart(updatedCart)
    }
  }



  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(1);
  }

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
          {
            loading ?
              <p>Loading...</p>
              :
              cartItems.length == 0 ? (
                <p>Your cart is empty</p>
              )
                :
                cartItems.map((item) => (
                  <div className='cartItem' key={item.id}>
                    <input type='checkbox' />
                    <div className='cartItemrow'>
                      <img src={item.thumbnail} alt={item.title} />
                      <div className='details'>
                        <h2>{item.title}</h2>
                        <span className='stock'>{item.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
                        <span className='normal'>Sold by <span className='link'>xyz detail</span></span>
                        <span className='normal'>Amazon Delivered</span>
                        <span className='incrementdecrement'>
                          {
                            item.quantity > 1 ?
                              <span onClick={() => handleQuantityChange(item.id, 'decrement')}>-</span>
                              :
                              <span onClick={() => handleQuantityChange(item.id, 'decrement')}><RiDeleteBin6Line /></span>
                          }
                          <span>{item.quantity}</span>
                          <span onClick={() => handleQuantityChange(item.id, 'increment')}>+</span>
                        </span>
                      </div>
                    </div>
                    <span className='price'>Rs. {(item.price * item.quantity).toFixed(2)}</span>

                  </div>
                ))
          }

        </div>
        <div className='cartTotal'>
          <h1>Subtotal: <span>Rs. {calculateSubtotal()}</span></h1>
          <button
          onClick={()=> navigate('/checkout')}
          >Proceed to Buy</button>
        </div>
      </div>
    </div>
  )
}

export default Cart