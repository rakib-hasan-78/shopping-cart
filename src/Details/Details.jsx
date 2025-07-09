import React from 'react';
import Hero from '../components/Hero/Hero';
import ProductDetails from './../components/ProductDetails/ProductDetails';


const Details = () => {
    
    return (
        <div className='w-full h-[695px] lg:h-[600px] mb-36'>
           <Hero className={`h-60`}>
                    <div className="hero-content text-center w-11/12 flex-col lg:mt-2 relative">
                            <h2 className="xl-title text-project-white"> 
                            Product Details
                            </h2>
                            <p className="lg:py-3 brief max-w-lg text-xs lg:text-sm text-project-white/80">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>  
                        </div>
                </Hero>
                <ProductDetails /> 
        </div>
    );
};

export default Details;