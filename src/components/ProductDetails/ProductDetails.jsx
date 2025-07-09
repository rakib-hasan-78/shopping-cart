import React from 'react';
import Rating from './../../Rating/Rating';
import { BsCart3 } from 'react-icons/bs';
import { GoHeart } from 'react-icons/go';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const products = useLoaderData();
  const { product_id } = useParams();
  const product = products.find(product => product.product_id === product_id);

  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating
  } = product;

  return (
    <div className='w-full h-auto bg-amber-300'>
      <div className="border border-white/60 xxs:w-11/12 lg:w-8/12 h-auto lg:h-[480px] absolute  left-1/2 top-2/8 lg:top-5/8 transform -translate-x-1/2 lg:-translate-y-4/8 rounded-2xl p-3.5 bg-project-white z-0">
        <div className="w-full h-full flex flex-col lg:flex-row items-start justify-center space-x-0 lg:space-x-3 space-y-2 lg:space-y-0">
          <div className='w-full lg:w-7/12 border-white xxs:h-80 lg:h-full rounded-2xl'>
            <img src={product_image} className='w-full h-full rounded-2xl' alt={product_title} />
          </div>
          <div className='w-full lg:w-5/12 h-full lg:h-72 flex flex-col items-start justify-start'>
            <h3 className='xxs:text-xs lg:text-base font-semibold leading-5'>{product_title}</h3>
            <span className='text-project-black/75 text-[10px] lg:text-[13px] font-semibold'>
              price: <span>$</span><span>{price}</span>
            </span>
            <div className="w-full h-auto my-1">
              {availability ? (
                <button className='btn btn-xs rounded-2xl text-xs font-extralight border-success bg-success/10 text-success shadow-none'>
                  in stock
                </button>
              ) : (
                <button className='btn btn-xs rounded-2xl text-xs font-extralight border-danger bg-danger/10 text-danger shadow-none'>
                  out of stock
                </button>
              )}
            </div>
            <p className='text-[9px] leading-4 my-1'>{description}</p>
            <h4 className='xxs:text-xs lg:text-[14px] font-semibold leading-5'>Specification:</h4>
            <div className='flex flex-col text-[8px] lg:text-[10px] leading-5'>
              {specification?.map((spec, i) => (
                <span key={i}>{spec}</span>
              ))}
            </div>
            <div className="w-full h-auto my-1">
              <h5 className='text-xs'>rating:</h5>
              <span className='flex items-center space-x-3 mt-1'>
                <Rating rating={rating} size='w-3 h-3' />
                <span className='text-[10px] btn btn-xs btn-disabled font-light rounded-2xl px-2 text-black'>
                  {rating}
                </span>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="btn btn-sm rounded-3xl bg-project-violet text-violet-100 font-medium">
                add to cart
                <span className='text-white'><BsCart3 /></span>
              </button>
              <button className='btn btn-circle btn-sm'>
                <GoHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
