import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import NavbarList from '../components/NavbarList'
import HomeBannerSlider from '../components/HomeBannerSlider'
import FourItemCard from '../components/HomeProductCards/FourItemCard'
import SingleItemCard from '../components/HomeProductCards/SingleItemCard'

const Home = () => {

  const [productData, setProductData] = useState(null);

  const getProducts = async () => {
    fetch('https://dummyjson.com/products?limit=30')
      .then(res => res.json())
      .then(data => {
        setProductData(data.products);
      });
  }

  useEffect(() => {
    getProducts();
  }, [])
  return (
    <div className='fullpage'>
      <Navbar />
      <NavbarList />
      {/* <div style={{
        width: '95%',
        margin: 'auto'
      }}>
        <div style={{
          position: 'relative'
        }}>
          <HomeBannerSlider />
          {
            productData?.length > 0 && (
              <div className='bannerCards'>
                <FourItemCard products={productData.slice(0,4)}/>
                <FourItemCard products={productData.slice(4,8)}/>

                <SingleItemCard product={productData[8]}/>
                <FourItemCard products={productData.slice(9,13)}/>
              </div>
            )
          }
        </div>

      </div>
      {productData?.length > 0 && (
      <div className='cards'>
        <FourItemCard  products={productData.slice(13,17)}/>
        <FourItemCard products={productData.slice(17,21)}/>
        <FourItemCard products={productData.slice(21,25)}/>
        <FourItemCard products={productData.slice(25,29)}/>
      </div>
      )} */}
    </div>
  )
}

export default Home