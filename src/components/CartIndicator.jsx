import React from 'react'
import { LuShoppingCart } from 'react-icons/lu'

const CartIndicator = () => {
  return (
    <div style={{
      display:'flex',
      gap:5,
      alignItems:'flex-end'
    }}>
      <LuShoppingCart size={30}/>
      <h4>Cart</h4>
    </div>
  )
}

export default CartIndicator