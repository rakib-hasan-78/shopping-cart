import React from 'react';
import { useLoaderData } from 'react-router-dom';
import im from '../../assets/hero.png';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { GoTrash } from "react-icons/go";
const SelectedItems = ({selectedContent}) => {
    const product = useLoaderData();
    const {product_title, product_image, price, shipping_charge} = product; 
    return (
        <div 
        className={`w-10/12 py-6 px-0 h-auto bg-project-white rounded-xl flex items-center ${selectedContent==='cart'?'justify-around' : 'justify-between px-4' } `}
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
            {
              selectedContent==='cart' &&(
                 <div className='flex items-center justify-start flex-col h-24 space-y-5'>
                <h5 className='text-lg font-semibold'>quantity</h5>
                <h6 className='text-sm'>01</h6>
                </div>
              )  
            }
            {/* action button based on logic = cart */}
            {

                selectedContent==='cart' &&(

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
                )
            }

            {/* action button based on logic = wishlist */}
            {

                selectedContent==='wishlist' &&(
                    <div className='h-24 flex flex-col items-center justify-start space-y-4'>
                        <h5 className='text-lg font-semibold'>Add to cart</h5>
                        <button
                        className='btn btn-block bg-project-violet text-project-white rounded-3xl font-light delay-150 transition-all hover:font-bold hover:bg-project-violet/90 shadow-none'
                        >
                        add to cart
                        </button>
                    </div>
                )
            }
            {/* cart items' price */}
            {
                selectedContent==='cart' &&(
                    <div className='h-24 flex flex-col items-center justify-start space-y-2'>
                        <div className='flex flex-col items-center justify-center -space-y-3'>
                        <h6 className='text-lg font-semibold'>price</h6>
                        <span
                        className='text-[8px]'
                        >(adding shipping cost once)</span>
                        </div>
                        <h6 className='text-sm'>01</h6>
                    </div>
                )
            }
            {/* remove button */}
            <div className="h-24 flex flex-col items-center justify-center pt-3">
                <button 
                className="btn btn-circle bg-project-black/1 delay-150 transition-all ease-in-out hover:bg-project-black/15 text-rose-500/60 hover:text-rose-500/90"
                >
                <GoTrash 
                className='font-extrabold text-lg'
                 />
                </button>
            </div>
        </div>
    );
};

export default SelectedItems;

