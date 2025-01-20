import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './HomeBannerSlider.css'
import { Navigation } from 'swiper/modules';
import slide1 from '../assets/homeBannerSlides/1.jpg'
import slide2 from '../assets/homeBannerSlides/2.jpg'
import slide3 from '../assets/homeBannerSlides/3.jpg'

const HomeBannerSlider = () => {
  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src={slide1}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3}/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default HomeBannerSlider