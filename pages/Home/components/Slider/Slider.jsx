import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import two from '../../../../img/2.png';
import './Style.scss';

export default function Slider() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className='divSlides'>
            <img
              src={two}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='divSlides'>
            <img
              src={two}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='divSlides'>
            <img
              src={two}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
