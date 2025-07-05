import React from 'react';

const Btn = ({ btnName, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-sm delay-100 rounded-3xl text-left flex items-center justify-start text-xs
        ${isActive
          ? 'bg-project-violet hover:bg-project-violet/95 text-project-white font-medium'
          : 'bg-project-gray/60 hover:bg-project-gray/70 text-project-black/60 font-normal'
        }`
      }
    >
      <small>{btnName}</small>
    </button>
  );
};

export default Btn;
