import React from 'react';

const Hero = ({children, className}) => {
    return (
        <div>
          <div className={`hero items-start justify-center bg-project-violet  rounded-b-2xl ${className}`}>
                {children}
            </div>  
        </div>
    );
};

export default Hero;
