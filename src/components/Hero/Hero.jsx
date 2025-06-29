import React from 'react';

const Hero = () => {
    return (
        <div>
          <div className="hero items-start justify-center bg-project-violet h-[494px] rounded-2xl">
                <div className="hero-content text-center w-11/12 flex-col mt-24">
                    
                    <h1 className="xxxl-title text-project-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-3 brief max-w-lg text-xs text-project-white/80">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className="btn border-project-white text-project-violet bg-project-white rounded-4xl shadow-project-violet capitalize">shop now</button>
                    
                </div>
            </div>  
        </div>
    );
};

export default Hero;