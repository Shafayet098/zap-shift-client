// import React from 'react';

import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
// import Brands from "./Brands/Brands";
import Services from "./Services/Services";
import Works from "./Works/Works";

const Home = () => {
    return (
        <div>
            <div className="mt-6">
                <Banner></Banner>
            </div>
            <div className="mt-8 mx-auto">
                <Works></Works>
            </div>
            <div className="mt-8 mx-auto">
                <Services></Services>
            </div>
            <div className="mt-16 mx-auto">
                <h1 className="text-center font-bold text-3xl pb-10 text-secondary">We've helped thousands of sales teams</h1>
                <Brands></Brands>
            </div>
            
        </div>
    );
};

export default Home;