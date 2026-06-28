// import React from 'react';

import { Outlet } from "react-router";
import Logo from "../Components/Logo/Logo";
import authImag from "../assets/authImage.png";


const AuthLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="pt-6">
                <Logo></Logo>
            </div>
            <div className="flex">
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
                <div className="flex-1">
                    <img src={authImag} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;