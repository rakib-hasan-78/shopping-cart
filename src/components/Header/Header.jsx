import React from 'react';
import Nav from './../Nav/Nav';
import Hero from './../Hero/Hero';

const Header = () => {
    return (
        <div className='w-full h-8'>
            <main className='main relative'>
                <Hero />
                <Nav />
            </main>
        </div>
    );
};

export default Header;