import "./Carousel.css"

import slide_img from "./img/del_2880_uz.webp"
import slide_img_2 from "./img/uhnydazha_2880_1.webp"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div className="swiper__box">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>

            <img width="1490px" height="168px"  src={slide_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_img_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_img_2} alt="" />
        </SwiperSlide>
      </Swiper>
     </div>
  );
}