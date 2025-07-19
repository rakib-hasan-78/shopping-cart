import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import navLinks from '../../hooks/navLinks/navLinks';
import { BsCart3 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { useProduct } from '../../hooks/CustomContext/CustomContext';
import NavProduct from '../NavProduct/NavProduct';

const Nav = () => {
    const location = useLocation();
    const { 
    cart,
    wishlist ,
    setSelectedContent
        } = useProduct(); 

    const [drawer, setDrawer] = useState(null);
    const drawerDown = useRef(null);
    const buttonRef = useRef(null);

const drawerHandler = (e, type) => {
  e.preventDefault();
  buttonRef.current = e.currentTarget;
  setSelectedContent(type)
  setDrawer(prev => (prev === type ? null : type));
};


// Close on outside click — with delay to let ref attach
useEffect(() => {
  const handleClickOutside = (e) => {
    const clickedOutsideDrawer =
      drawerDown.current && !drawerDown.current.contains(e.target);
    const clickedOutsideButton =
      buttonRef.current && !buttonRef.current.contains(e.target);

    if (clickedOutsideDrawer && clickedOutsideButton) {
      setDrawer(null);
      setSelectedContent(null);
    }
  };

  if (drawer) {
    document.addEventListener('mousedown', handleClickOutside);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [drawer, setDrawer, setSelectedContent]);




    return (
        <div className={`navbar  min-h-8 -py-2 z-20 ${location.pathname === '/' ? 'bg-project-violet' : 'bg-project-white'} xxs:px-0 xxs:pr-3  lg:px-16  xxs:w-full rounded-t-2xl relative`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-1 w-52 p-0 shadow flex flex-col space-y-2"
                    >
                        {navLinks}
                    </ul>
                </div>
                <a className={`xxs:text-sm md:text-lg lg:text-xl ${location.pathname === '/' ? 'text-project-white' : 'text-project-black'} p-0`}>
                    gadget & gear
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4 text-sm">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end flex items-center space-x-4">
                <div className="indicator">
                    {
                        cart.length>0 &&(
                            <span className="indicator-item badge badge-xs badge-error text-red-50">{cart.length}</span>
                            )
                    }
                    <button
                    onClick={(e)=>drawerHandler(e, 'cart')}
                    className={`btn btn-circle  btn-xs ${location.pathname==='/'? `text-project-violet bg-project-white border-project-white`:`text-project-white bg-project-violet border-project-violet`}`}
                    type="button">
                    <BsCart3 />
                    </button>
                </div>
                <div className="indicator">
                    {
                        wishlist.length>0 &&(
                            <span className="indicator-item badge badge-xs badge-error text-red-50">{wishlist.length}</span>
                            )
                    }
                    <button
                    onClick={(e)=>drawerHandler(e, 'wishlist')}
                    className={`btn btn-circle  btn-xs ${location.pathname==='/'? `text-project-violet bg-project-white border-project-white`:`text-project-white bg-project-violet border-project-violet`}`}
                    type="button">
                    <GoHeart />
                    </button>
                </div>
            </div>
            {drawer && (
            <div ref={drawerDown}>
                <NavProduct />
            </div>
            )}

        </div>
    );
};

export default Nav;
