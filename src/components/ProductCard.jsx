import React from 'react'
import { useNavigate } from 'react-router-dom'
import product1 from '../assets/products2/p1.jpg'
import './ProductCard.css'
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { toast } from 'react-toastify';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const navigate = useNavigate()
    const { updateCartCount } = useCart();

    const addToCart = (productId, quantity = 1) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProduct = cart.find(item => item.id === productId);

        if (existingProduct) {
            existingProduct.quantity += quantity;
        }
        else {
            cart.push({ id: productId, quantity });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        toast("Cart updated")

        updateCartCount();

    }
    return (
        <div className='card' onClick={() => {
            navigate(`/products/${product.id}`)
        }}>
            <div className='product-image-container'>
                <img src={product.thumbnail} alt={product.title} className='product-image' />
            </div>
            <div className='product-details'>
                <h3 className='product-title'>{product.title}</h3>
                <div className='rating'>
                    <span className='stars'><IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf /></span>
                    <span className='reviews'>({product.rating})</span>
                </div>
                <p className='bought-info'>{product.stock} left in stock</p>
                <div className='price-section'>
                    <span className='current-price'>Rs. {product.price}</span>
                    <span className='original-price'>Rs. {(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}</span>
                    <span className='discount'>({product.discountPercentage}% off)</span>
                </div>

                <p className='delivery-info'>
                    FREE delivery <strong>Thu, 9 Jan</strong><br />
                    Or fastest delivery <strong>Wed, 8 Jan</strong>
                </p>
                <p className='service'>Service: {product.warrantyInformation || "No warranty"}</p>
                <button className='add-to-cart' onClick={() => addToCart(product.id)}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard