import React from 'react';
import heroPng from '../../assets/hero.png';

const ProductCard = () => {
    return (
        <div className='w-full h-52'>
            <div className="border border-project-white w-8/12 absolute max-h-[400px]  left-1/2 top-4/5 transform -translate-x-1/2 -translate-y-2/12 rounded-2xl overflow-hidden p-3.5 bg-project-white/20 z-0">
                <div className="w-full h-[320px]">
                    <img
                        src={heroPng}
                        alt="Hero"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
