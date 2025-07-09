import React, { useContext, useEffect, useState } from 'react';
import Btn from './../../Btn/Btn';
import { ProductContext } from '../Products/Products';


const Category = () => {
    const [itemCategory, setItemCategory] = useState('all');
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>{
            const allCategories = ['all', ...new Set(data.map(item=>item.category))];
            setCategories(allCategories);
        })

    },[]); 

    const 
    {
        products,
        setProducts, 
        allProducts, 
        setAllProducts
    } = useContext(ProductContext);

    const categoryHandler = category => {
    setItemCategory(category);

    if (category === 'all') {
        setProducts(allProducts);
    } else {
        const filtered = allProducts.filter(product =>
        product.category.toLowerCase().includes(category.toLowerCase())
        );
        setProducts(filtered);
    }
    };

    console.log(categories);   

    return (
        <div className='xxs:w-full lg:w-2/12 h-auto flex flex-wrap xxs:flex-row lg:flex-col p-6 bg-white border border-white rounded-md space-y-2'>
           {
            categories.map(category=>(
                <Btn onClick={()=>categoryHandler(category)} key={category} btnName={category} isActive={itemCategory===category} />
            ))
           }
        </div>
    );
};

export default Category;