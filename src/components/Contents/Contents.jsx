import React from 'react';
import Card from './../Card/Card';

const Contents = () => {
    return (
        <div className='lg:w-7/12 h-auto grid lg:grid-cols-3 justify-items-center items-center gap-3'>
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default Contents;