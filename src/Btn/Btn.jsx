import React, { useState } from 'react';

const Btn = ({btnName, task, name}) => {

    const [color, setColor]= useState(false);

    const categoryHandler=e=>{
        e.preventDefault();
        setColor(true);
        task();
    }

    return (
        <button
        name={name}
        onClick={categoryHandler}
        className={`btn btn-sm ${color?'bg-project-violet hover:bg-project-violet/95 text-project-white font-medium':'bg-project-gray/60 hover:bg-project-gray/70 text-project-black font-light'} delay-100 rounded-3xl text-left flex items-center justify-start text-xs`}
        >
        {btnName}
        </button> 
    );
};

export default Btn;