// import React from 'react';

import { FaQuoteLeft } from "react-icons/fa";


const ReviewCard = ({ review }) => {
    const { user_photoURL,userName, review: comment } = review;
    return (
        <div className=" rounded-[32px] bg-white max-w-2xl px-4 py-4 shadow-md">
            {/* Quote Icon */}
            <FaQuoteLeft className="text-3xl text-cyan-200 mb-6" />

            {/* Testimonial */}
            <p className="text-gray-600 text-[16px] leading-10 font-light">
                {comment}
            </p>

            {/* Divider */}
            <div className="border-t-2 border-dashed border-cyan-500 my-6"></div>

            {/* User */}
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#0A4E57]">
                    <img className="rounded-full" src={user_photoURL} alt="" />
                </div>

                <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-bold text-[#0A4E57]">
                        {userName}
                    </h3>

                    <p className="text-xl text-gray-500">
                        Senior Product Designer
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;