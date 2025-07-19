import React from 'react';
import { useProduct } from '../../hooks/CustomContext/CustomContext';
import { RiSoundModuleLine } from "react-icons/ri";

const Highlights = ({selectedContent, cart, wishlist}) => {
    const {totals, sortHandler} = useProduct();
    const cartText = selectedContent==='cart' && 'cart';
    return (
        <section className="w-9/12 h-auto py-5 flex items-center justify-between px-2 mt-10 mx-auto">

        <h3 className='font-bold text-xl'>{ cartText && cart.length>0 &&('cart') || wishlist.length>0 &&('wishlist')}</h3>

            {
               selectedContent==='cart' && cart.length>0 &&(
                    <div className='flex items-center justify-between w-6/12'>
                        <h3 className='font-bold text-lg'>total cost: {(totals.subTotal + totals.shipping).toFixed(2)}</h3>
                        <div className='btn-gradient-border p-[1px] w-4/12 cursor-pointer flex items-center justify-center
                        '>
                            <div className='bg-white w-full rounded-full py-2 font-semibold text-project-violet cursor-pointer'>
                                <button
                                onClick={sortHandler} 
                                 className='w-full flex flex-wrap items-center justify-center  cursor-pointer' type="button">
                                sort by price   <RiSoundModuleLine className='ml-2' /> 
                                </button>
                            </div>
                        </div>
                        <button
                        
                        className='bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 shadow-md hover:brightness-105 transition-all duration-300 btn px-7 py-6 rounded-full text-violet-100 text-lg'>
                            purchase
                        </button>
                    </div>
                )
            }

        </section>
    );
};

export default Highlights;