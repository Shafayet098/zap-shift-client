// import React from 'react';
import service from '../../../assets/service.png'
const Services = () => {
    return (
        <div className="w-full rounded-2xl max-h-[%50] bg-secondary mt-8">
            <div>
                <h1 className="text-center font-bold pt-12 text-4xl text-white">Our Services</h1>
                <p className="pt-6 text-center px-64 text-white">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 justify-center gap-4 p-12'>
                <div className='bg-white  rounded-2xl flex flex-col gap-4 items-center p-6 hover:bg-primary transition duration-700'>
                    <div className='h-18 w-18 items-center rounded-full flex justify-center bg-linear-to-b text-center from-slate-200 to-white'>
                        <div>
                            <img src={service} alt="" />
                        </div>
                    </div>
                    <h1 className='font-bold text-xl'>Express  & Standard Delivery</h1>
                    <p className='text-center'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                <div className='bg-white  rounded-2xl flex flex-col gap-4 items-center p-6 hover:bg-primary transition duration-700'>
                    <div className='h-18 w-18 items-center rounded-full flex justify-center bg-linear-to-b text-center from-slate-200 to-white'>
                        <div>
                            <img src={service} alt="" />
                        </div>
                    </div>
                    <h1 className='font-bold text-xl'>Express  & Standard Delivery</h1>
                    <p className='text-center'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                <div className='bg-white  rounded-2xl flex flex-col gap-4 items-center p-6 hover:bg-primary transition duration-700'>
                    <div className='h-18 w-18 items-center rounded-full flex justify-center bg-linear-to-b text-center from-slate-200 to-white'>
                        <div>
                            <img src={service} alt="" />
                        </div>
                    </div>
                    <h1 className='font-bold text-xl'>Express  & Standard Delivery</h1>
                    <p className='text-center'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                <div className='bg-white  rounded-2xl flex flex-col gap-4 items-center p-6 hover:bg-primary transition duration-700'>
                    <div className='h-18 w-18 items-center rounded-full flex justify-center bg-linear-to-b text-center from-slate-200 to-white'>
                        <div className='h-18 w-18 items-center rounded-full flex justify-center bg-linear-to-b text-center from-slate-200 to-white'>
                            <div>
                                <img src={service} alt="" />
                            </div>
                        </div>
                    </div>
                    <h1 className='font-bold text-xl'>Express  & Standard Delivery</h1>
                    <p className='text-center'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                <div className='bg-white  rounded-2xl flex flex-col gap-4 items-center p-6 hover:bg-primary transition duration-700'>
                    <div className='h-18 w-18 items-center rounded-full flex justify-center bg-linear-to-b text-center from-slate-200 to-white'>
                        <div>
                            <img src={service} alt="" />
                        </div>
                    </div>
                    <h1 className='font-bold text-xl'>Express  & Standard Delivery</h1>
                    <p className='text-center'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                <div className='bg-white  rounded-2xl flex flex-col gap-4 items-center p-6 hover:bg-primary transition duration-700'>
                    <div className='h-18 w-18 items-center rounded-full flex justify-center bg-linear-to-b text-center from-slate-200 to-white'>
                        <div>
                            <img src={service} alt="" />
                        </div>
                    </div>
                    <h1 className='font-bold text-xl'>Express  & Standard Delivery</h1>
                    <p className='text-center'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>

            </div>
        </div>
    );
};

export default Services;