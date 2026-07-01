// import React from 'react';

import { Link, NavLink } from "react-router";
import Logo from "../../../Components/Logo/Logo";
import { MdArrowOutward } from "react-icons/md";
import useAuth from "../../../Hooks/useAuth";


const NavBar = () => {
    const { user,signOutUser } = useAuth();
    const handleLogOut=()=>{
        signOutUser().then().catch(err=>{
            console.log(err)
        })
    }
    const links = <>
        <li><NavLink>Services</NavLink></li>
        <li><NavLink to={'/about'}>About Us</NavLink></li>
        <li><NavLink to={"/coverage"}>Coverage</NavLink></li>
        <li><NavLink to={"/send-parcel"}>SendParcel</NavLink></li>
        {
        user && <li><NavLink to={"/dashboard"}>My Parcels</NavLink></li>
        }
    </>
    return (
        <div className="navbar bg-white rounded-xl shadow-sm flex items-center justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <span className="btn btn-ghost text-xl">
                    <Logo></Logo>
                </span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="flex gap-4 items-center">
                {
                    user ? <button onClick={handleLogOut} className="py-2 text-lg text-secondary  px-4 hover:bg-secondary  bg-white border-2 border-slate-100 flex items-center hover:text-primary transition-colors duration-300 cursor-pointer rounded-xl font-bold">
                        LogOut
                    </button>
                        :
                        <Link to="/auth" className="py-2 text-lg text-secondary  px-4 hover:bg-secondary  bg-white border-2 border-slate-100 flex items-center hover:text-primary transition-colors duration-300 cursor-pointer rounded-xl font-bold">
                            Login
                        </Link>
                }
                <div className="flex">
                    <Link to={'/rider'} className="font-bold py-2 text-lg text-center text-secondary transition-colors duration-300 bg-primary rounded-xl ease px-4 hover:bg-secondary hover:text-primary hover:cursor-pointer">
                        Be A Rider
                    </Link>
                    <button className=" font-bold px-3 text-xl text-center text-primary transition-colors duration-300 bg-secondary rounded-full ease  hover:cursor-pointer ">
                        <MdArrowOutward size={20} className="font-bold " />
                    </button>
                </div>


            </div>
        </div>
    );
};

export default NavBar;