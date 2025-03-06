import React, { useEffect, useState } from 'react'
import './ProductPage.css'
import product1 from '../assets/products2/p1.jpg'
import Navbar from '../components/Navbar'
import NavbarList from '../components/NavbarList'
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { RiDiscountPercentLine } from 'react-icons/ri'
import { FaArrowsRotate } from 'react-icons/fa6'
import { CiDeliveryTruck } from 'react-icons/ci'
import { GoShieldCheck } from 'react-icons/go'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useCart } from '../context/CartContext'

const ProductPage = () => {
  const { updateCartCount } = useCart();

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate()


   useEffect(() => {
      fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then((data) => {
          setCategories(data);
        })
        .catch((err) => console.error('Error fetching categories:', err));
    }, []);
  
    const handleCategoryClick = (category) => {
      fetch(`https://dummyjson.com/products/category/${category.slug}`)
        .then((res) => res.json())
        .then((data) => {
          navigate(`/searchproducts?query=${category.slug}`, {
            state: { results: data.products },
          });
        })
        .catch((err) => console.error('Error fetching category products:', err));
    };
  

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setActiveImage(data.thumbnail)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message);
        setLoading(false)

      })
  }, [id])


  const addToCart = (productId, quantity = 1) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart)
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



  if (loading) return <div className='loading'>Loading product details...</div>
  if (error) return <div className='error'>Error: {error}</div>


  return (
    <div className='fullpage'>
      <Navbar />
      <NavbarList />
      <div className='productCategories1'>
        {categories.map((category, index) => (
          <p key={index} onClick={() => handleCategoryClick(category)}>{category.name}</p>
        ))}
      </div>

      <div className='productRow'>
        <div className='productImageList'>
          {
            product.images.slice(0, 4).map((imgpath, index) => (
              <img src={imgpath} key={index} alt={`Product ${index}`}
                onClick={() => setActiveImage(imgpath)}
              />
            )
            )
          }

        </div>
        <div className='productImage'>
          <img src={activeImage} alt={product.title} />
        </div>
        <div className='productInfo'>
          <h1>{product.title}</h1>
          <div className='rating'>
            <span className='stars'><IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf /></span>
            <span className='reviews'>({product.rating})</span>
          </div>
          <div className='price'>
            <span className='discount'>-{product.discountPercentage}%</span>
            <span className='finalAmount'>Rs. {product.price}</span>
          </div>
          <span className='mrp'>M.R.P.: <span>{(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}</span></span>
          <div className='hr'></div>
          <div className='offerstitle'>
            <RiDiscountPercentLine />
            <span>Offers</span>
          </div>
          <div className='offers'>
            <div className='offer'>
              <h3>Bank Offer</h3>
              <p>Upto ₹1,000.00 discount on select Credit Cards</p>
              <span>3 offers &gt;</span>
            </div>
            <div className='offer'>
              <h3>Bank Offer</h3>
              <p>Upto ₹1,000.00 discount on select Credit Cards</p>
              <span>3 offers &gt;</span>
            </div>
            <div className='offer'>
              <h3>Bank Offer</h3>
              <p>Upto ₹1,000.00 discount on select Credit Cards</p>
              <span>3 offers &gt;</span>
            </div>
          </div>
          <div className='hr'></div>
          <div className='extras'>
            <div className='extraItem'>
              <FaArrowsRotate />
              <span>7 days Replacement</span>
            </div>
            <div className='extraItem'>
              <CiDeliveryTruck />
              <span>Free Delivery</span>
            </div>
            <div className='extraItem'>
              <GoShieldCheck />
              <span>{product.warrantyInformation || "No warranty"}</span>
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <th>Brand</th>
                <td>{product.brand}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{product.category}</td>
              </tr>

            </tbody>
          </table>
          <div className='about'>
            <h3>About this item</h3>
            <ul>
              <li>{product.description}
              </li>

            </ul>
          </div>
        </div>
        <div className='productPurchaseInfo'>
          <div className='exchange'>
            <p>With Exchange<br /><span className='span1'>Up to Rs. {(product.price - product.price / 10).toFixed(2)} off</span></p>
            <input type='radio' />
          </div>
          <div className='exchange'>
            <p>Without Exchange<br /><span className='span2'>Rs. {product.price}</span><span className='span3'>Rs. {(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}</span></p>
            <input type='radio' />
          </div>
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          <button onClick={() => addToCart(product.id)}>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage