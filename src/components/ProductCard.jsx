import React from 'react'
import { useNavigate } from 'react-router-dom'
import product1 from '../assets/products2/p1.jpg'
import './ProductCard.css'
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

const ProductCard = () => {
    const navigate = useNavigate()


    return (
        <div className='card' onClick={() => {
            navigate('/products/1234')
        }}>
            <div className='product-image-container'>
                <img src={product1} alt='REDMI' className='product-image' />
            </div>
            <div className='product-details'>
                <h3 className='product-title'>This is Product 1</h3>
                <div className='rating'>
                    <span className='stars'><IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf /></span>
                    <span  className='reviews'>(104)</span>
                </div>
                <p className='bought-info'>4k+ bought in past month</p>
                <div className='price-section'>
                    <span className='current-price'>Rs. 5,999</span>
                    <span className='original-price'>Rs. 8,999</span>
                    <span className='discount'>(33% off)</span>
                </div>

                <p className='delivery-info'>
                    FREE delivery <strong>Thu, 9 Jan</strong><br />
                    Or fastest delivery <strong>Wed, 8 Jan</strong>
                </p>
                <p className='service'>Service: Installation</p>
                <button className='add-to-cart'>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard