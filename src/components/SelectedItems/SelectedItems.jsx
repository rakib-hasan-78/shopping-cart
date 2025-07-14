import React from 'react';
import { useLoaderData } from 'react-router-dom';
import im from '../../assets/hero.png';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
const SelectedItems = ({selectedContent}) => {
    const product = useLoaderData();
    const {product_title, product_image, price, shipping_charge} = product; 
    return (
        <div 
        className='w-10/12 py-6 h-auto bg-project-white rounded-xl flex items-center justify-around'
        >
            {/* product image */}
            <div className='w-auto h-24 flex items-start space-x-8'>
                <img className='w-32 rounded-xl' src={im} alt={`any name`} />
                <div>
                    <h4 className='text-lg font-semibold'>Apple MacBook Pro 16-inch M2 Max</h4>
                    <h5> <span className='font-semibold text-base'>price:</span> <span className='text-sm text-project-black/60'>$ 1234.50</span> </h5>
                    <h6> <span className='font-semibold text-base'>shipment charge:</span>  <span className='text-sm text-project-black/60'>$ 56</span> </h6>
                </div>
            </div>
            {/* product quantity */}
            <div className='flex items-center justify-start flex-col h-24 space-y-5'>
                <h5 className='text-lg font-semibold'>quantity</h5>
                <h6 className='text-sm'>01</h6>
            </div>
            {/* action button based on logic */}
            <div className='h-24 flex flex-col items-center justify-start space-y-4'>
                <h5 className='text-lg font-semibold'>customize items</h5>
                <div className='btn-gradient-border p-[1px] w-full'>
                    <div className="bg-white rounded-full flex items-center justify-between px-2 py-1 w-full">
                        <button
                        className="btn btn-xs btn-circle text-xs min-h-0 h-5 p-0 bg-transparent border-none">
                        <small 
                        className='text-violet-600'
                        >
                        <AiOutlineMinus />
                        </small>
                        </button>

                        <span className='text-xs'>
                        <small className='text-violet-500'> 
                            <BsCart3 /> 
                        </small> 
                        </span>

                        <button
                        className="btn btn-xs btn-circle text-xs min-h-0 h-5 py-2.5 bg-transparent border-none">
                        <small 
                        className='text-pink-500'
                        >
                        <AiOutlinePlus />
                        </small>
                        </button>
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    );
};

export default SelectedItems;

