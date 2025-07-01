import React from 'react';
import { BiDollar } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { AiOutlinePlus ,  AiOutlineMinus } from "react-icons/ai";
import hds from '../../assets/hero.png';
const Card = () => {
    return (
        <div className='w-full h-64 border rounded-md bg-project-white border-project-gray flex flex-col'>
            <div className='p-3 rounded-md'>
            <img className='rounded-md' src={hds} alt="" />
            </div>
            <div className='px-3'>
                <h2 
                className='sm-title'
                >
                <small>
                Corsair K95 RGB Platinum
                </small>
                </h2>
                <p 
                className='text-project-black/60 text-xs'
                >
                <small className='flex'>
                price:
                <span className='text-xs'><BiDollar />  </span>
                <span>7902</span>
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
                     className="btn btn-xs bg-white text-purple-600 font-normal rounded-full min-h-0 h-auto px-4 py-0 w-full" 
                     >
                    
                        view details
                        
                    </button>
                </div>
                <div className="btn-gradient-border p-[1px] w-9/12">
                <div className="bg-white rounded-full flex items-center justify-between px-2 py-1 w-full">
                    <button 
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