import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import NavbarList from '../components/NavbarList'
import HomeBannerSlider from '../components/HomeBannerSlider'
import FourItemCard from '../components/HomeProductCards/FourItemCard'
import SingleItemCard from '../components/HomeProductCards/SingleItemCard'

const Home = () => {
  return (
    <div className='fullpage'>
      <Navbar />
      <NavbarList />
      <div style={{
        width: '95%',
        margin: 'auto'
      }}>
        <div style={{
          position: 'relative'
        }}>
          <HomeBannerSlider />
          <div className='bannerCards'>
            <FourItemCard />
            <FourItemCard />
            <SingleItemCard />
            <FourItemCard />
          </div>
        </div>

      </div>

      <div className='cards'>
        <FourItemCard />
        <FourItemCard />
        <FourItemCard />
        <FourItemCard />
      </div>
    </div>
  )
}

export default Home