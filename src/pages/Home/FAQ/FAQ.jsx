// import React from 'react';

import { MdArrowOutward } from "react-icons/md";

const FAQ = () => {
    return (
        <div className="flex flex-col gap-6 items-center text-center max-w-full">
            <h1 className="text-secondary text-4xl font-bold">Frequently Asked Question (FAQ)</h1>
            <p className="px-64">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            <div className="w-full px-32 flex flex-col gap-4">
                <div className="collapse collapse-arrow bg-white border border-base-300 hover:bg-blue-200 text-left">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">How does this posture corrector work?</div>
                    <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                </div>
                <div className="collapse collapse-arrow bg-white border border-base-300 hover:bg-blue-200 text-left">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">How does this posture corrector work?</div>
                    <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                </div>
                <div className="collapse collapse-arrow bg-white border border-base-300 hover:bg-blue-200 text-left">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">How does this posture corrector work?</div>
                    <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                </div>
                <div className="collapse collapse-arrow bg-white border border-base-300 hover:bg-blue-200 text-left">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">How does this posture corrector work?</div>
                    <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                </div>
                <div className="collapse collapse-arrow bg-white border border-base-300 hover:bg-blue-200 text-left">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">How does this posture corrector work?</div>
                    <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                </div>
            </div>
            <div className="bottom-18 flex">
                <button className="w-full font-bold py-3 text-xl text-center text-secondary transition-colors duration-300 bg-primary rounded-full ease px-6 md:w-auto hover:bg-secondary hover:text-primary hover:cursor-pointer">
                    See More FAQ's
                </button>
                <div className="flex gap-4">
                    <button className="w-full font-bold py-0 text-xl text-center text-primary transition-colors duration-300 bg-secondary rounded-full ease px-4 md:w-auto  hover:cursor-pointer">
                        <MdArrowOutward size={20} className="font-bold " />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQ;