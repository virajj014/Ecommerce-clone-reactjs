import React from 'react'
import { LuShoppingCart } from 'react-icons/lu'
import { useCart } from '../context/CartContext'

const CartIndicator = () => {

  const {cartCount} = useCart();

  return (
    <div style={{
      display:'flex',
      gap:5,
      alignItems:'flex-end',
      position:'relative'
    }}>
      <LuShoppingCart size={30}/>
      {
        cartCount >0 && (
          <span
          style={{
            position:'absolute',
            top:-20,
            right:20,
            background:'white',
            color:'black',
            borderRadius:'50%',
            padding:'5px 10px',
            fontSize:'10px'
          }}
          >{cartCount}</span>
        )
      }
    </div>
  )
}

export default CartIndicator