// import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/banner1.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
    return (
        <Carousel autoPlay={false} infiniteLoop={true}>
            <div className="relative inline-block">
                <img
                    src={banner1}
                    alt="Sample"
                    className="w-full rounded-lg"
                />

                <div className="absolute bottom-18 left-22 flex">
                    <button className="w-full font-bold py-3 text-xl text-center text-secondary transition-colors duration-300 bg-primary rounded-full ease px-6 md:w-auto hover:bg-secondary hover:text-primary hover:cursor-pointer">
                        Track Your Parcel
                    </button>
                    <div className="flex gap-4">
                        <button className="w-full font-bold py-0 text-xl text-center text-primary transition-colors duration-300 bg-secondary rounded-full ease px-4 md:w-auto  hover:cursor-pointer">
                            <MdArrowOutward size={20} className="font-bold "/>
                        </button>
                        <button className="inline-block py-3 text-xl text-secondary  px-6 hover:bg-secondary hover:text-primary transition-colors duration-300 cursor-pointer rounded-xl font-bold">
                            Be A Rider
                        </button>
                    </div>


                </div>
            </div>
            <div className="relative inline-block">
                <img
                    src={banner2}
                    alt="Sample"
                    className="w-full rounded-lg"
                />

                <div className="absolute bottom-18 left-22 flex">
                    <button className="w-full font-bold py-3 text-xl text-center text-secondary transition-colors duration-300 bg-primary rounded-full ease px-6 md:w-auto hover:bg-secondary hover:text-primary hover:cursor-pointer">
                        Track Your Parcel
                    </button>
                    <div className="flex gap-4">
                        <button className="w-full font-bold py-0 text-xl text-center text-primary transition-colors duration-300 bg-secondary rounded-full ease px-4 md:w-auto  hover:cursor-pointer">
                            <MdArrowOutward size={20} className="font-bold "/>
                        </button>
                        <button className="inline-block py-3 text-xl text-secondary  px-6 hover:bg-secondary hover:text-primary transition-colors duration-300 cursor-pointer rounded-xl font-bold">
                            Be A Rider
                        </button>
                    </div>


                </div>
            </div>
            <div className="relative inline-block">
                <img
                    src={banner3}
                    alt="Sample"
                    className="w-full rounded-lg"
                />

                <div className="absolute bottom-18 left-22 flex">
                    <button className="w-full font-bold py-3 text-xl text-center text-secondary transition-colors duration-300 bg-primary rounded-full ease px-6 md:w-auto hover:bg-secondary hover:text-primary hover:cursor-pointer">
                        Track Your Parcel
                    </button>
                    <div className="flex gap-4">
                        <button className="w-full font-bold py-0 text-xl text-center text-primary transition-colors duration-300 bg-secondary rounded-full ease px-4 md:w-auto  hover:cursor-pointer">
                            <MdArrowOutward size={20} className="font-bold "/>
                        </button>
                        <button className="inline-block py-3 text-xl text-secondary  px-6 hover:bg-secondary hover:text-primary transition-colors duration-300 cursor-pointer rounded-xl font-bold">
                            Be A Rider
                        </button>
                    </div>


                </div>
            </div>
        </Carousel>
    );
};

export default Banner;