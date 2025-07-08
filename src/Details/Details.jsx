import React from 'react';

const Details = () => {
    return (
        <div className='w-full h-80'>
           <Hero className={`h-80`}>
                    <div className="hero-content text-center w-11/12 flex-col mt-24">
                        
                            <h2 className="xl-title text-project-white"> 
                            Product Details
                            </h2>
                            <p className="py-3 brief max-w-lg text-xs text-project-white/80">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>  
                        </div>
                </Hero>
                <ProductDetails /> 
        </div>
    );
};

export default Details;