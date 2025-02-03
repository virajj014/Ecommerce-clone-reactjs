
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SingleItemCard.css'
import product1 from '../../assets/products/product1.jpg'
import product2 from '../../assets/products/product2.jpg'
import product3 from '../../assets/products/product3.jpg'
import product4 from '../../assets/products/product4.jpg'

const SingleItemCard = ({ product }) => {
  if (!product) return null;
  const navigate = useNavigate()

  return (
    <div className='singleItemCard' onClick={()=> navigate(`/products/${product.id}`)}>
      <h1>Exclusive Deal for you</h1>

      <div className='item'>
        <img src={product.thumbnail} alt={product.title}/>
        <p>{product.title}</p>
      </div>

    </div>
  )
}

export default SingleItemCard