import React from 'react'
import { useNavigate } from 'react-router-dom'
import product1 from '../../assets/products/product1.jpg'
import product2 from '../../assets/products/product2.jpg'
import product3 from '../../assets/products/product3.jpg'
import product4 from '../../assets/products/product4.jpg'
import './FourItemCard.css'

const FourItemCard = () => {

  const navigate = useNavigate()

  return (
    <div className='fourItemCard'>
      <h1>Deals related to items you've saved</h1>
      <div className='twocrosstwogrid'>
        <div className='item'>
          <img src={product1} />
          <p>Men's sports shoes</p>
        </div>
        <div className='item'>
          <img src={product2} />
          <p>Men's Casual/Formal Shoes</p>

        </div>
        <div className='item'>
          <img src={product3} />
          <p>Women Casual/Formal Shoes</p>
        </div>
        <div className='item'>
          <img src={product4} />
          <p>Women Accessories</p>
        </div>
      </div>
    </div>
  )
}

export default FourItemCard