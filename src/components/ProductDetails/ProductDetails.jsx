import React from 'react';

const ProductDetails = () => {
    return (
        <div className='w-full h-80'>
            <div className="border border-project-white w-8/12 absolute max-h-[500px]  left-1/2 top-3/5 transform -translate-x-1/2 -translate-y-2/12 rounded-2xl overflow-hidden p-3.5 bg-project-white z-0">
                <div className="w-full h-[320px] flex items-center justify-center space-x-3">
                    <div className='w-5/12 border-white h-72 rounded-2xl shadow-lg'>
                        <img src={``} className='w-full h-full rounded-2xl' alt="" />
                    </div>
                    <div className='w-6/12 h-72 border flex flex-col items-start justify-start'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;