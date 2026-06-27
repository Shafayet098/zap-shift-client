// import React from 'react';

// import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import amazon from '../../../assets/brands/amazon.png'
import vector from '../../../assets/brands/amazon_vector.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import start_people from '../../../assets/brands/start_people.png'
import { Autoplay } from "swiper/modules";
const Brands = () => {
    return (
        <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            loop={false}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={amazon} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={vector} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={casio} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={moonstar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={randstad} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={star} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={start_people} alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Brands;