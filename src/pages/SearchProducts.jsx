import React from 'react'
import Navbar from '../components/Navbar'
import NavbarList from '../components/NavbarList'
import './SearchProducts.css'
import ProductCard from '../components/ProductCard'
const SearchProducts = () => {
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

      <div className='productSort'>
        <p>showing results for "mobile"</p>
        <div style={{ display: "flex", gap: '10px' }}>
          <p>Sort by:</p>
          <select>
            <option>
              Featured
            </option>
            <option>
              Price: Low to High
            </option>
            <option>
              Price: High to Low
            </option>
          </select>

        </div>
      </div>

      <div className='productList'>
        <div className='left'>
          <h5>Delivery Day</h5>
          <div>
            <input type='checkbox' />
            <p>Get it by today</p>
          </div>
          <div>
            <input type='checkbox' />
            <p>Get it by tommorrow</p>
          </div>
          <div>
            <input type='checkbox' />
            <p>Get it in 2 Days</p>
          </div>

          <br />
          <br />
          <h5>Installed RAM Size</h5>
          <div>
            <input type="checkbox" />
            <p>Up to 1.9 GB</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>2 to 3.9 GB</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>4 to 5.9 GB</p>
          </div>
          <div>
            <input type='checkbox' />
            <p>6 to 7.9 GB</p>
          </div>
          <div>
            <input type='checkbox' />
            <p>8 to 9.9 GB</p>
          </div>
          <div>
            <input type='checkbox' />
            <p>10 GB & above</p>
          </div>
        </div>
        <div className='right'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

        </div>

      </div>
    </div>
  )
}

export default SearchProducts