
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SingleItemCard.css'
import product1 from '../../assets/products/product1.jpg'
import product2 from '../../assets/products/product2.jpg'
import product3 from '../../assets/products/product3.jpg'
import product4 from '../../assets/products/product4.jpg'

const SingleItemCard = () => {

  const navigate = useNavigate()

  return (
    <div className='singleItemCard'>
      <h1>Deals related to items you've saved</h1>

      <div className='item'>
        <img src={product1} />
        <p>Men's sports shoes</p>
      </div>

    </div>
  )
}

export default SingleItemCard