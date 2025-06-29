import React from 'react';

const Copy = () => {
    return (
        <div className='w-full h-auto flex items-center justify-center py-2.5'>
            <aside>
                <p className='text-xs'>Copyright © {new Date().getFullYear()} - All right reserved by <span>md rakibul hasan</span></p>
            </aside>
        </div>
    );
};

export default Copy;