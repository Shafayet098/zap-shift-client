// import React from 'react';
import { use } from 'react';
import customer from '../../../assets/customer-top.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';



const Review = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);
    console.log(reviews);
    return (
        <div className='flex flex-col justify-center text-center items-center gap-4'>
            <div>
                <img src={customer} alt="" />
            </div>
            <h1 className='font-bold text-4xl'>What our customers are sayings</h1>
            <p className='px-64'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>

            <div>
                <Swiper
                    effect={'coverflow'}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    

                    coverflowEffect={{
                        rotate: 30,
                        stretch: '50%',
                        depth: 200,
                        modifier: 1,
                        scale:0.75,

                        slideShadows: true,
                    }}
                    autoplay={{
                        delay:2000,
                        disableOnInteraction:false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination,Autoplay]}
                    className="mySwiper max-w-6xl"
                >
                    {
                        reviews.map(review => <SwiperSlide key={review.id}>
                            <ReviewCard review={review}></ReviewCard>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Review;