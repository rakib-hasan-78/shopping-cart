import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterNav = () => {
    return (
        <div className='w-full h-auto grid xxs:grid-cols-1 lg:grid-cols-3 justify-items-center py-10 px-24'>
            <nav className='flex flex-col items-center'>
                <h5 className='footer-title text-regular-black capitalize font-bold xxs:text-sm lg:text-lg'>Services</h5>
                <NavLink 
                className={`xxs:text-xs lg:text-sm text-regular-black/60 font-normal`}
                >
                Product Support
                </NavLink>
                <NavLink 
                className={`xxs:text-xs lg:text-sm text-regular-black/60 font-normal`}
                >
                Order Tracking
                </NavLink>
                <NavLink 
                className={`xxs:text-xs lg:text-sm text-regular-black/60 font-normal`}
                >
                Shipping & Delivery
                </NavLink>
                <NavLink 
                className={`xxs:text-xs lg:text-sm text-regular-black/60 font-normal`}
                >
                Returns
                </NavLink>
            </nav>
            <nav className='flex flex-col items-center'>
                <h5 className='footer-title text-regular-black capitalize font-bold xxs:text-sm lg:text-lg'>Company</h5>
                <NavLink 
                className={`xxs:text-xs lg:text-sm text-regular-black/60 font-normal`}
                >
                About Us
                </NavLink>
                <NavLink 
                className={`xxs:text-xs lg:text-sm text-regular-black/60 font-normal`}
                >
                Careers
                </NavLink>
                <NavLink 
                className={`xxs:text-xs lg:text-sm text-regular-black/60 font-normal`}
                >
                Contact
                </NavLink>
            </nav>
            <nav className='flex flex-col items-center'>
                <h5 className='footer-title text-regular-black capitalize font-bold xxs:text-sm lg:text-lg'>Legal</h5>
                <NavLink 
                className={`xxs:text-xs lg:text-sm text-regular-black/60 font-normal`}
                >
                Terms of Service
                </NavLink>
                <NavLink 
                className={`xxs:text-xs lg:text-sm text-regular-black/60 font-normal`}
                >
                Privacy Policy
                </NavLink>
                <NavLink 
                className={`xxs:text-xs lg:text-sm text-regular-black/60 font-normal`}
                >
                Cookie Policy
                </NavLink>
            </nav>
        </div>
    );
};

export default FooterNav;