import React, { useState } from 'react';
import Hero from './../../components/Hero/Hero';

const Dashboard = () => {
    const [selectedContent , setSelectedContent] = useState('cart');
    return (
        <div className='w-full h-auto flex flex-col bg-project-gray/80 relative'>
            <main className="main">
                <Hero className={`h-72`}>
                    <div className='hero-content text-center w-11/12 flex-col mt-10'>
                        <h2 
                        className='xxxl-title text-project-white'
                        >
                        dashboard
                        </h2>
                        <p
                        className='lg:py-3 brief max-w-3xl text-xs lg:text-sm text-project-white/80'
                        >
                         Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!   
                        </p>
                        <div 
                        className='w-full flex items-center justify-center py-3 space-x-5'>
                            <button 
                            type="button" 
                            className={`btn btn-lg rounded-3xl px-12 border border-project-white shadow-none ${selectedContent==='cart'?'bg-project-white text-project-violet font-bold':'bg-transparent text-project-white font-light'}
                            `}>cart</button>
                            <button 
                            type="button" 
                            className={`btn btn-lg rounded-3xl px-12 border border-project-white shadow-none ${selectedContent==='wishlist'?'bg-project-white text-project-violet font-bold':'bg-transparent text-project-white font-light'}
                            `}>wishlist</button>
                        </div>
                    </div>
                </Hero>
            </main>
            
        </div>
    );
};

export default Dashboard;