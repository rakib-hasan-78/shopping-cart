import React from 'react';
import Btn from './../../Btn/Btn';

const Category = () => {
    return (
        <div className='xxs:w-full lg:w-2/12 h-auto flex xxs:flex-row lg:flex-col p-6 bg-white border border-white rounded-md space-y-2'>
           <Btn btnName={'all'} />
           <Btn btnName={'Laptops'} />
           <Btn btnName={'Keyboards'} />
           <Btn btnName={'Mouse'} />
           <Btn btnName={'Soundboxes'} />
           <Btn btnName={'Monitors'} />
           <Btn btnName={'Headphones'} />
           <Btn btnName={'Pendrives'} />
           <Btn btnName={'External SSD'} />
           <Btn btnName={'RAM'} />
           <Btn btnName={'Graphic Cards'} />
           <Btn btnName={'Processors'} />
        </div>
    );
};

export default Category;