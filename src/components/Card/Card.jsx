import React from 'react';
import { BiDollar } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { AiOutlinePlus ,  AiOutlineMinus } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../hooks/CustomContext/CustomContext';

const Card = ({product}) => {
    const {product_title, product_image, availability, price, product_id} = product;
    const navigate = useNavigate();
    const {cartHandler, productDecrementHandler} = useProduct()
    return (
        <div className='w-full h-72 border rounded-md bg-gray-400/30 border-project-gray flex flex-col justify-center '>
            <div className='p-3 rounded-md relative flex items-center justify-center'>
            <div className='w-40 h-32 bg-white rounded-md' >
            <img className='rounded-md ' src={product_image} alt="" />
            </div>
            {
                !availability ? 
                <div className='absolute w-3 top-3 left-3 rounded-full'>
                <div 
                className="badge w-18 text-[8px] font-extrabold rounded-full bg-gradient-to-r from-rose-600/40 via-red-500/40 to-pink-500/50 text-red-900/60 border-0 shadow-2xl"
                > 
                <small>out of stock</small>
                </div>
            </div> : ''
            }
            </div>
            <div className='px-3'>
                <h2 
                className='sm-title'
                >
                <small>
                {product_title}
                </small>
                </h2>
                <p 
                className='text-project-black/60 text-xs'
                >
                <small className='flex'>
                price:
                <span className='text-xs'><BiDollar />  </span>
                <span>{price}</span>
                </small>
                </p>
            </div>
            <div 
            className='px-3 flex flex-col space-y-2 items-start justify-center py-3'
            >
                <div 
                className="btn-gradient-border p-[1px] w-9/12"
                >
                    <button
                    onClick={()=>navigate(`products/${product_id}`)}
                     className="btn btn-xs bg-white text-purple-600 font-normal rounded-full min-h-0 h-auto px-4 py-0 w-full" 
                     >
                    
                        view details
                        
                    </button>
                </div>
                <div className="btn-gradient-border p-[1px] w-9/12">
                <div className="bg-white rounded-full flex items-center justify-between px-2 py-1 w-full">
                    <button
                    onClick={()=>productDecrementHandler(product)} 
                    className="btn btn-xs btn-circle text-xs min-h-0 h-5 w-5 p-0 bg-transparent border-none">
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
                    onClick={()=>cartHandler(product)} 
                    className="btn btn-xs btn-circle text-xs min-h-0 h-5 w-5 py-2.5 bg-transparent border-none">
                    <small 
                    className='text-pink-500'
                    >
                    <AiOutlinePlus />
                    </small>
                    </button>
                </div>
                </div>


            </div>
        </div>
    );
};

export default Card;