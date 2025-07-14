import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SelectedItems = ({selectedContent}) => {
    const selectedItem = useLoaderData();
    
    return (
        <div 
        className='w-10/12 py-6 h-auto bg-project-white rounded-xl'
        >
            
        </div>
    );
};

export default SelectedItems;