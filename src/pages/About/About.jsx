// import React from 'react';

import { useState } from "react";
import { NavLink } from "react-router";

const tabs = [
    "Story",
    "Mission",
    "Success",
    "Team & Others"];
const tabContent = {
    Story: `We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.`,

    Mission: `Our mission is to simplify logistics through technology, providing secure, affordable, and fast delivery services while creating value for customers and businesses across Bangladesh.`,

    Success: `With thousands of successful deliveries every day and an expanding nationwide network, we continue to grow by focusing on innovation, reliability, and customer satisfaction.`,

    "Team & Others":
        `Behind every successful delivery is a passionate team of professionals dedicated to providing exceptional service. Together, we work to connect businesses and customers across the country.`,
};

const About = () => {
    const [activeTab, setActiveTab] = useState("Story");
    return (
        <div className="bg-white rounded-2xl my-12 p-16 max-w-6xl mx-auto ">
            <h1 className="text-4xl font-bold text-secondary pb-8">About Us</h1>
            <p className="w-[60%]">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

            <section className="max-w-6xl mx-auto mt-8">
                {/* Tabs */}
                <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200 pb-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-lg transition cursor-pointer ${activeTab === tab
                                ? "font-semibold text-secondary"
                                : "text-gray-500 hover:text-secondary"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="mt-8 space-y-6 text-secondary leading-8 text-[17px]">
                    <p>{tabContent[activeTab]}</p>
                    <p>{tabContent[activeTab]}</p>
                    <p>{tabContent[activeTab]}</p>
                </div>
            </section>

        </div>
    );
};

export default About;