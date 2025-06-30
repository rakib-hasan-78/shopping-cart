import React from 'react';

const Loader = () => {
    return (
        <div className='w-full h-auto flex items-center justify-center'>
            <h5 className='font-black lg:text-3xl uppercase italic '>
                <span 
                className='bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>loading  </span>
                <span 
                className="loading loading-dots loading-xl text-violet-500">
                </span>
            </h5>
        </div>
    );
};

export default Loader;