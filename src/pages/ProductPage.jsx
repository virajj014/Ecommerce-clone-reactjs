import React from 'react'
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

const ProductPage = () => {
  return (
    <div className='fullpage'>
      <Navbar />
      <NavbarList />
      <div className='productCategories'>
        <p>Electronics</p>
        <p>Mobiles & Accessories</p><p>
          Laptops & Accessories</p><p>
          TV & Home Entertainment</p><p>
          Audio</p><p>
          Cameras</p><p>
          Computer Peripherals</p><p>
          Smart Technology</p><p>
          Musical Instruments</p><p>
          Office & Stationery</p>
      </div>

      <div className='productRow'>
        <div className='productImageList'>
          <img src={product1} />
          <img src={product1} />
          <img src={product1} />
          <img src={product1} />
        </div>
        <div className='productImage'>
          <img src={product1} />
        </div>
        <div className='productInfo'>
          <h1>Redmi Note 14 5G (Titan Black, 8GB RAM 128GB Storage) | Global Debut MTK Dimensity 7025 Ultra | 2100 nits Segment Brightest 120Hz AMOLED | 50MP Sony LYT 600 OIS+EIS Triple Camera</h1>
          <div className='rating'>
            <span className='stars'><IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf /></span>
            <span className='reviews'>(104)</span>
          </div>
          <div className='price'>
            <span className='discount'>-13%</span>
            <span className='finalAmount'>Rs. 19,999</span>
          </div>
          <span className='mrp'>M.R.P.: <span>22,999</span></span>
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
              <FaArrowsRotate/>
              <span>7 days Replacement</span>
            </div>
            <div className='extraItem'>
              <CiDeliveryTruck/>
              <span>Free Delivery</span>
            </div>
            <div className='extraItem'>
              <GoShieldCheck/>
              <span>1 year Warranty</span>
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <th>Brand</th>
                <td>Redmi</td>
              </tr>
              <tr>
                <th>Operating System</th>
                <td>Android 14, Xiaomi HyperOS</td>
              </tr>
              <tr>
                <th>Screen Size</th>
                <td>6.67 Inches</td>
              </tr>
            </tbody>
          </table>
          <div className='about'>
            <h3>About this item</h3>
            <ul>
              <li>
                Display: 6.67" FHD+ AMOLED (1080x2400) Ultra-narrow bezels Display with 120Hz Refresh rate; 2100nits peak brightness; Corning Gorilla Glass 5 Display Protection
              </li>
              <li>
                Processor:Mediatek Dimensity 7025-Ultra 6nm Octa-core 5G processor for high performance ; Up to 2.5GHz ; Upto 16GB RAM including 8GB Virtual RAM
              </li>
              <li>
                Camera: 50MP Sony LYT-600 AI Triple Camera with 8MP Ultra Wide sensor and 2MP Macro camera| 20MP Front camera
              </li>
            </ul>
          </div>
        </div>
        <div className='productPurchaseInfo'>
          <div className='exchange'>
            <p>With Exchange<br/><span className='span1'>Up to Rs. 18,950 off</span></p>
            <input type='radio'/>
          </div>
          <div className='exchange'>
            <p>Without Exchange<br/><span className='span2'>Rs. 19,999</span><span className='span3'>Rs. 22,999</span></p>
            <input type='radio'/>
          </div>
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage