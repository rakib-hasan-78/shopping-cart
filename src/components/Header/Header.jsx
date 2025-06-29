import React from 'react';
import Nav from './../Nav/Nav';
import Hero from './../Hero/Hero';
import ProductCard from './../ProductCard/ProductCard';

const Header = () => {
    return (
        <header className='w-full h-auto'>
            <main className='main relative'>
                <Hero />
                <Nav />
                <ProductCard />
            </main>
        </header>
    );
};

export default Header;