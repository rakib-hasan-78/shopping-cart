import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './../../components/Nav/Nav';
import Header from './../../components/Header/Header';

const Root = () => {
    return (
        <div 
        className='w-full h-auto flex flex-col items-center justify-between pt-3'>
            <Header />
            <Outlet />
        
        </div>
    );
};

export default Root;
