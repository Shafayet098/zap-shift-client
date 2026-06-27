// import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const RootLayout = () => {
    return (
        <div >
            <nav className='max-w-7xl mx-auto'>
                <NavBar></NavBar>
            </nav>
            <main className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer className='bg-black mt-18'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;