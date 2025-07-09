import React, { createContext, useContext, useState } from 'react';

const productCustomContext = createContext();
export const useProduct = ()=> useContext(productCustomContext);

const CustomContext = () => {
    const [cart, setCart] = useState([]);
    const [wishlist , setWishList] = useState([]);

    const cartHandler = product=>{
        if (wishlist.find(wL=>wL.product_id===product.product_id)) {
            toast.error(`${product.product_title} Is Already In Wish List.`,{
                position:'top-center',
            });
            return;
        } else if (cart.find(ct=>ct.product_id===product.product_id)) {
            const matchProduct = cart.map(ca=>ca.product_id===product.product_id ? {...ca , quantity: ca.quantity + 1} : ca);
            setCart(matchProduct);
            return;
        } else {
            setCart([...cart , {...product , quantity:1}])
        }
    }

    return (
        <div>
            
        </div>
    );
};

export default CustomContext;