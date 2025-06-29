import React, { useEffect, useState } from 'react';

const Products = ({productData}) => {
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
            
        </div>
    );
};

export default Products;