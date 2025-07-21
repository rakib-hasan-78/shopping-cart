import React from 'react';
import { useProduct } from '../../hooks/CustomContext/CustomContext';


const PurchaseHandler = ({className}) => {
    const {isOpen , setIsOpen} = useProduct();
    
    const actionHandler = (e) =>{
        e.preventDefault();
        setIsOpen(true);
    }

    return (
        <>
        <button
        onClick={actionHandler}
        className={`bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 shadow-md hover:brightness-105 transition-all duration-300 btn rounded-full text-violet-100 py-6 ${className}`}
        >
            purchase
        </button>
        </>
    );
};

export default PurchaseHandler;