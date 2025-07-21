import React from 'react';
import checkMark from '../../assets/checkmark.gif';
import { useProduct } from '../../hooks/CustomContext/CustomContext';

const Modal = ({isOpen}) => {
    const {totals, setCart, setWishList, setIsOpen} = useProduct();
    const closeHandler = e=>{
        e.preventDefault();
        setCart([]);
        setWishList([]);
        setIsOpen(false);
    }

    if(!isOpen) return null;
    
    return (
        <div className='fixed inset-0 bg-emerald-800/40 bg-blend-color-dodge backdrop-blur-lg z-50 flex items-center justify-center top-0'>
            <div className='w-4/12 py-6  bg-stone-700/10 backdrop-blur-xl rounded-xl bg-blend-difference flex flex-col items-center justify-center'>
                <div className='w-36 h-36  rounded-full border overflow-hidden mb-4'>
                    <img className='w-full h-full object-cover' src={checkMark} alt="confirm-gif" />
                </div>
                <div>
                    <h3 className='font-black text-2xl text-emerald-100 pb-1'>payment successfully</h3>
                    <div className='w-full border-t border-emerald-50'></div>
                    <p className='text-center py-1 text-emerald-200/40'>thanks for purchasing</p>
                    <p className='text-center text-emerald-200/40'>total : $ {totals.grandTotal}</p>
                    <button
                    onClick={closeHandler} 
                    className='btn btn-wide btn-lg mt-2 text-lg uppercase font-black bg-emerald-500 border-none shadow-none text-emerald-200'
                    >
                    close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;