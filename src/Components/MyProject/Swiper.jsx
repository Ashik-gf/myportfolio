import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import photos from '../../../public/image/hotelmanagement.png'
import photos2 from '../../../public/image/course.png'
import photo3 from '../../../public/image/getjobbd.png'

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const Slider =()=> {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={photos} /></SwiperSlide>
        <SwiperSlide> <img src={photos2} /></SwiperSlide>
        <SwiperSlide> <img src={photo3} /></SwiperSlide>
        <SwiperSlide>
            <h2>Thank you</h2>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
export default Slider;
