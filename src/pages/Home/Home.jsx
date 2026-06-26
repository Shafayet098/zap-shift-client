// import React from 'react';

import Banner from "./Banner/Banner";
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
        </div>
    );
};

export default Home;