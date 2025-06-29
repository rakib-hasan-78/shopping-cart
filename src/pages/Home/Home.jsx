import React from 'react';
import ProductCard from './../../components/ProductCard/ProductCard';
import Hero from './../../components/Hero/Hero';
import { useLoaderData } from 'react-router-dom';
import Products from './../../components/Products/Products';

const Home = () => {
    const productData = useLoaderData();
    
    return (
        <div className='w-full h-auto flex flex-col bg-project-gray/50'>
            <main className="main">
                <Hero>
                    <div className="hero-content text-center w-11/12 flex-col mt-24">
                    
                        <h1 className="xxxl-title text-project-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-3 brief max-w-lg text-xs text-project-white/80">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn border-project-white text-project-violet bg-project-white rounded-4xl shadow-project-violet capitalize">shop now</button>
                        
                    </div>
                </Hero>
                <ProductCard />
                <Products productData={productData} />
            </main>
        </div>
    );
};

export default Home;
