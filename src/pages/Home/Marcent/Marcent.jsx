// import React from 'react';
import location from '../../../assets/location-merchant.png'
import merchant from '../../../assets/be-a-merchant-bg.png'
const Marcent = () => {
    return (
        <div className="relative hero bg-secondary  max-w-6xl mx-auto rounded-2xl p-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={location}
                    className="rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl text-white font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className="text-white py-6">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <div className='flex gap-4'>
                        <button className="w-full font-bold py-3 text-sm text-center text-secondary transition-colors duration-700 bg-primary rounded-full ease px-6 md:w-auto hover:bg-secondary hover:text-primary hover:cursor-pointer ">
                            Become a Merchant
                        </button>
                        <button className="w-full font-bold py-3 text-sm text-center text-primary bg-secondary rounded-full ease px-6 md:w-auto hover:bg-primary hover:cursor-pointer border-2 border-primary hover:border-secondary hover:text-secondary transition duration-700">
                            Earn with ZapShift Courier
                        </button>
                    </div>
                </div>
            </div>
            <div className='absolute top-0 translate -translate-y-8'>
                <img src={merchant} alt="" />
            </div>
        </div>
    );
};

export default Marcent;