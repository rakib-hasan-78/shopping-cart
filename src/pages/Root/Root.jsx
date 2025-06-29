import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';


const Root = () => {
    return (
        <div 
        className='w-full h-auto flex flex-col items-center justify-between pt-3'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
