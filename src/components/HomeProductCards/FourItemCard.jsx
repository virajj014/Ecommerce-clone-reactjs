import React from 'react'
import { useNavigate } from 'react-router-dom'
import product1 from '../../assets/products/product1.jpg'
import product2 from '../../assets/products/product2.jpg'
import product3 from '../../assets/products/product3.jpg'
import product4 from '../../assets/products/product4.jpg'
import './FourItemCard.css'

const FourItemCard = ({ products }) => {

  const navigate = useNavigate()

  return (
    <div className='fourItemCard'>
      <h1>Deals related to items you've saved</h1>
      <div className='twocrosstwogrid'>
        {products.map((product) => (
          <div className='item'
          onClick={()=> navigate(`/products/${product.id}`)}
          >
            <img src={product.thumbnail} alt={product.title}/>
            <p>{product.title}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default FourItemCard