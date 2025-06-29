import React from 'react';
import Nav from './../Nav/Nav';
import Hero from './../Hero/Hero';
import ProductCard from './../ProductCard/ProductCard';

const Header = () => {
    return (
        <div className='w-full h-8'>
            <main className='main relative'>
                <Hero />
                <Nav />
                <ProductCard />
            </main>
        </div>
    );
};

export default Header;