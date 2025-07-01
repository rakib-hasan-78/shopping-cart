import React, { useContext } from 'react';
import Card from './../Card/Card';
import { ProductContext } from '../Products/Products';

const Contents = () => {
    const {products} = useContext(ProductContext);
    return (
        <div className='lg:w-7/12 h-auto grid lg:grid-cols-3 justify-items-center items-center gap-3'>
            {
                products.map(product=>(
                    <Card key={product.product_id} product={product} />
                ))
            }
        </div>
    );
};

export default Contents;