import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { GoTrash } from "react-icons/go";
import { useProduct } from '../../hooks/CustomContext/CustomContext';



const SelectedItems = ({selectedContent, item, variant}) => {
    
    const {product_title, product_image, price, shipping_charge, quantity} = item;
    const { cartHandler, productDecrementHandler, removeHandler,  getCardAmount, moveCartToWishListHandler} = useProduct();

    const addedPrice = getCardAmount(item);

    return (
        <div 
        className={`px-0 h-auto  rounded-xl flex items-center ${selectedContent==='cart'?'justify-around' : 'justify-between' } ${variant==='nav'? 'w-11/12 py-0 bg-fuchsia-200/30 border border-fuchsia-100 backdrop-blur-2xl':'w-9/12 py-6 bg-project-white'} `}
        >
            {/* product image */}
            <div className={`w-auto ${variant==='nav'?'h-16 space-x-3':'h-24 space-x-6'} flex items-start `}>
                <img className={`${variant==='nav'?'w-20 h-16':'w-32'} rounded-xl`} src={product_image} alt={`product name: ${product_title}`} />
                <div className={`${variant==='nav' ? 'text-fuchsia-100':'text-project-black'} `}>
                    <h4 className={`${variant==='nav'? 'text-xs line-clamp-1 w-28':'text-sm w-60 line-clamp-2'} font-semibold `}>{product_title}</h4>
                 
                        <h5> <span className={`font-semibold ${variant==='nav'?'text-[10px]':'text-xs'}`}>price:</span> <span className={` ${variant==='nav'? 'text-[10px]':'text-sm'}`}>$ {price}</span> </h5>
                        <h6> <span className={`font-semibold ${variant==='nav'?'text-[10px]':'text-xs'}`}>shipment charge:</span>  <span className={`${variant==='nav'? 'text-[10px]':'text-sm'}`}>$ {shipping_charge}</span> </h6>

                   
                </div>
            </div>
            {/* action button based on logic = cart */}
            {

                selectedContent==='cart' &&(

                <div className={` ${variant==='nav'? 'h-16 space-y-3  text-fuchsia-100':'h-24 space-y-4 text-project-black'} flex flex-col items-center justify-start`}>
                    <h5 className={`${variant==='nav'?'text-xs':'text-sm'} font-semibold`}>customize items</h5>
                    <div className={`btn-gradient-border p-[1px] w-full`}>
                        <div className={`bg-white rounded-full flex items-center justify-between ${variant==='nav'?'px-0 py-0':'px-2 py-1'} w-full`}>
                            <button
                            onClick={()=>productDecrementHandler(item)}
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
                            onClick={()=>cartHandler(item)}
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
                        <h5 className='text-base font-semibold'>Add to cart</h5>
                        <button
                        onClick={()=>moveCartToWishListHandler(item)}
                        className='btn btn-block bg-project-violet text-project-white rounded-3xl font-light delay-150 transition-all hover:font-bold hover:bg-project-violet/90 shadow-none'
                        >
                        add to cart
                        </button>
                    </div>
                )
            }
            {/* product quantity */}
            {
              selectedContent==='cart' &&(
                 <div className={`flex items-center ${variant==='nav'?'justify-start h-14 space-y-1.5 text-fuchsia-100':'justify-start h-24 space-y-5 text-project-black'} flex-col`}>
                <h5 className={`${variant==='nav' ? 'text-xs':'text-sm'} font-semibold`}>quantity</h5>
                <h6 className={`${variant==='nav'?'text-[10px]':'text-xs'}`}>{quantity}</h6>
                </div>
              )  
            }
            {/* cart items' price */}
            {
                selectedContent==='cart' &&(
                    <div className={`${variant==='nav'?'h-16 space-y-1 text-fuchsia-100':'h-24 space-y-2 text-project-black'} flex flex-col items-center justify-start `}>
                        <div className='flex flex-col items-center justify-center -space-y-3'>
                        <h6 className={`${variant==='nav'?'text-xs':'text-sm'} font-semibold`}>price</h6>
                        <span
                        className={`text-[8px] ${variant==='nav'?'text-fuchsia-100/30': 'text-project-black/50'}`}
                        >(include shipping cost)</span>
                        </div>
                        <h6 className='text-sm'>{addedPrice}</h6>
                    </div>
                )
            }
            {/* remove button */}
            <div className={`${variant==='nav' ?'h-20':'h-24'} flex flex-col items-center justify-center pt-3`}>
                <button 
                onClick={()=>removeHandler(item)}
                className={`btn btn-circle bg-project-black/1 delay-150 transition-all ease-in-out hover:bg-project-black/15 ${ variant==='nav'?'text-rose-100 hover:text-rose-200/90': 'text-rose-500/60 hover:text-rose-500/90'}`}
                >
                <GoTrash 
                className={`font-extrabold ${variant==='nav'? 'text-xs':'text-lg'}`}
                 />
                </button>
            </div>
        </div>
    );
};

export default SelectedItems;

