// import React from 'react';
import booking from '../../../assets/bookingIcon.png'
const Works = () => {
    return (
        <div className='flex flex-col '>
            <h1 className="pl-26 pb-8 text-secondary text-4xl font-bold">How it Works</h1>
            <div className='flex gap-4 justify-center'>
                <div className='rounded-2xl p-6 bg-white flex flex-col gap-2 w-[20%]'>
                    <div>
                        <img src={booking} alt="" />
                    </div>
                    <h2 className='text-secondary font-bold text-lg'>Booking Pic & Drop</h2>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='rounded-2xl p-6 bg-white flex flex-col gap-2 w-[20%]'>
                    <div>
                        <img src={booking} alt="" />
                    </div>
                    <h2 className='text-secondary font-bold text-lg'>Booking Pic & Drop</h2>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='rounded-2xl p-6 bg-white flex flex-col gap-2 w-[20%]'>
                    <div>
                        <img src={booking} alt="" />
                    </div>
                    <h2 className='text-secondary font-bold text-lg'>Booking Pic & Drop</h2>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='rounded-2xl p-6 bg-white flex flex-col gap-2 w-[20%]'>
                    <div>
                        <img src={booking} alt="" />
                    </div>
                    <h2 className='text-secondary font-bold text-lg'>Booking Pic & Drop</h2>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default Works;