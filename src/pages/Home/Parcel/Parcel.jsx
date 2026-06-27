// import React from 'react';
import tracking from '../../../assets/live-tracking.png'

const Parcel = () => {
    return (
        <div className="border-y-2 flex flex-col gap-4 border-dotted py-10 max-w-6xl mx-auto">
            <div className='flex gap-8 bg-white w-full rounded-2xl p-4 items-center'>
                <div>
                    <img src={tracking} alt="" />
                </div>
                <div className='p-6 border-l-2 border-dotted'>
                    <h1 className='text-lg font-bold pb-2'>Live Parcel Tracking</h1>
                    <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
            <div className='flex gap-8 bg-white w-full rounded-2xl p-4 items-center'>
                <div>
                    <img src={tracking} alt="" />
                </div>
                <div className='p-6 border-l-2 border-dotted'>
                    <h1 className='text-lg font-bold pb-2'>Live Parcel Tracking</h1>
                    <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
            <div className='flex gap-8 bg-white w-full rounded-2xl p-4 items-center'>
                <div>
                    <img src={tracking} alt="" />
                </div>
                <div className='p-6 border-l-2 border-dotted'>
                    <h1 className='text-lg font-bold pb-2'>Live Parcel Tracking</h1>
                    <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
        </div>
    );
};

export default Parcel;