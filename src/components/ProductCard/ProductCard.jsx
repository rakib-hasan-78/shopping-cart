import React from 'react';
import heroPng from '../../assets/hero.png';

const ProductCard = () => {
    return (
        <div className='w-full h-64 border'>
            <div className="border border-project-white w-8/12 absolute max-h-[400px]  left-1/2 top-1/6 transform -translate-x-1/2 -translate-y-1/6 rounded-2xl overflow-hidden p-3.5 bg-project-white/20 z-0">
                <div className="w-full h-[340px]">
                    <img
                        src={heroPng}
                        alt="Hero"
                        className="w-full h-full object-cover  rounded-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
