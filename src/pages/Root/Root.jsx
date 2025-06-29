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
            <Footer className='pt-3'>
                <div className='flex flex-wrap flex-col items-center py-6'>
                    <h3 className='xxl-title py-2'>Gadget Heaven</h3>
                    <p className='brief text-xs'>Leading the way in cutting-edge technology and innovation.</p>
                </div>
            </Footer>
        </div>
    );
};

export default Root;
