import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../pages/Home/Home';
import Loader from './../Loader/Loader';

const Products = () => {
    const {productData} = useContext(DataContext);

    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(()=>{

        setProducts(productData);
        setAllProducts(productData);

    },[productData]);

    console.log(products);
    console.log(`product length is : ${allProducts.length}`);
    return (
        <div>
        <Loader />
        </div>
    );
};

export default Products;