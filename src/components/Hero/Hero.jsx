import React from 'react';

const Hero = ({children, className}) => {
    return (
        <div>
          <div className={`hero items-start justify-center bg-project-violet h-[494px] rounded-2xl ${className}`}>
                {children}
            </div>  
        </div>
    );
};

export default Hero;