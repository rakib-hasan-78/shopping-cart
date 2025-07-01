import React, { createContext, useContext, useEffect, useState } from 'react';
import { DataContext } from '../../pages/Home/Home';
import Category from './../Category/Category';
import Contents from './../Contents/Contents';

export const ProductContext = createContext();

const Products = () => {
    const {productData} = useContext(DataContext);

    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    let result = products.map(product=>product.category)
    console.log(result);
    console.log(products);

    useEffect(()=>{

        setProducts(productData);
        setAllProducts(productData);

    },[productData]);

    return (
        <ProductContext.Provider value={{products, setProducts, allProducts, setAllProducts}}>
        <div 
        className='w-full h-auto flex flex-wrap xxs:flex-col lg:flex-row items-start justify-center bg-project-light-black py-14 space-x-2'
        >
        {/* category */}
        <Category />
        <Contents />
        </div>
        </ProductContext.Provider>
    );
};

export default Products;