import React from 'react';
import heroPng from '../../assets/hero.png';

const ProductCard = () => {
    return (
        <div className='w-full h-96'>
            <div className="border border-project-white w-full lg:w-8/12 absolute max-h-[680px]  left-1/2 top-1/10 lg:top-2/8 transform -translate-x-1/2 -translate-y-3/8 rounded-2xl overflow-hidden p-3.5 bg-project-white/20 z-0">
                <div className="w-full h-[450px] lg:h-[520px]">
                    <img
                        src={heroPng}
                        alt="Hero"
                        className="w-full h-full object-cover align-middle  rounded-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
