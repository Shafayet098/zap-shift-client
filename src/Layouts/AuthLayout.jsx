// import React from 'react';

import { Outlet } from "react-router";
import Logo from "../Components/Logo/Logo";
import authImag from "../assets/authImage.png";


const AuthLayout = () => {
    return (
        <div className="relative max-w-full mx-auto">
            <div className="absolute top-6 left-14">
                <Logo></Logo>
            </div>
            <div className="flex items-center">
                <div className="flex-1 bg-white pb-12">
                    <div className="flex items-center justify-center">
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="flex-1">
                    <img src={authImag} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;