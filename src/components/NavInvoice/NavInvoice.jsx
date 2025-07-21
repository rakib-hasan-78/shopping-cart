import React from 'react';
import { useProduct } from '../../hooks/CustomContext/CustomContext';
import PurchaseHandler from './../PurchaseHandler/PurchaseHandler';

const NavInvoice = () => {
    const {totals} = useProduct();
    return (
       <div className='w-11/12 h-auto py-3 rounded-xl bg-slate-700/30 backdrop-blur-lg flex flex-col items-center justify-center'>
        <h3 
        className='text-base uppercase font-black italic underline underline-offset-8 decoration-project-violet'
        >
        invoice
        </h3>
        {/* calculation block */}
        <div className='w-6/12 h-auto my-6'>
            <div 
            className='w-full h-auto flex items-center justify-between py-2'
            >
            <div className='w-6/12 text-right'>
                <span className="text-base font-semibold uppercase">
                subtotal =   
                </span>
            </div>
            <div className='w-5/12 flex items-center justify-start'>
                 <span>$ {totals.subTotal.toFixed(2)} / =</span> 
            </div>
            </div
            >
            <div 
            className='w-full h-auto flex items-center justify-between py-2'
            >
            <div className='w-7/12 text-right'>
                <span className='text-base font-semibold uppercase'>
                shipping cost = 
                </span>
            </div>
            <div className='w-4/12 flex items-center justify-start'>
                <span>$ {totals.shipping.toFixed(2)} / =</span>
            </div>
            </div
            >
            <div 
            className='w-full h-auto flex items-center justify-between py-2'
            >
            <div className='w-7/12 text-right'>
                <span className='text-base font-semibold uppercase'>
                    tax    (5%) = 
                </span>
            </div>
            <div className='w-4/12 flex items-center justify-start'>
                <span>$ {totals.tax.toFixed(2)} / =</span>
            </div>
            </div>
            <div className='w-full border-t rounded-2xl'></div>
            <div 
            className='w-full h-auto flex items-center justify-between py-2'
            >
            <div className='w-7/12 text-right'>
                <span className='text-base font-semibold uppercase'>
                grand total = 
                </span>
            </div>
            <div className='w-4/12 flex items-center justify-start'>
                <span>$ {totals.grandTotal} / =</span>
            </div>
            </div>
            <div className='w-full h-auto flex items-center justify-center'>
                <PurchaseHandler
                 className={`w-full btn-wide text-sm !px-36   `} />
            </div>
        </div>
       </div>
    );
};

export default NavInvoice;