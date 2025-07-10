import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const productCustomContext = createContext();
export const useProduct = ()=> useContext(productCustomContext);

const CustomContext = () => {
    const [cart, setCart] = useState([]);
    const [wishlist , setWishList] = useState([]);

    // cart handler 
    const cartHandler = product=>{

        // if same product is in wishlist===>
        if (wishlist.find(wL=>wL.product_id===product.product_id)) {
            toast.error(`${product.product_title} IsIn Wish List.`,{
                position:'top-center',
            });
            return;
        }
        // if same product is already in the cart ===>

        else if (cart.find(ct=>ct.product_id===product.product_id)) {
            // providing message from toast ====>
            toast.success(`${product.product_title} Added To List`, {
                position:'top-center',
            });
            // product items increment logic ===>
            const matchProduct = cart.map(ca=>ca.product_id===product.product_id ? {...ca , quantity: ca.quantity + 1} : ca);
            setCart(matchProduct);
            return;
        }
        // if the product to first time add to cart ===>
         else {
            setCart([...cart , {...product , quantity:1}]);
            return;
        }
    };
    // wish list handler 
    const wishListHandler = product =>{
        // if same product is in cart list ====>
        if (cart.find(ca=>ca.product_id===product.product_id)) {
            toast.error(`${product.product_title} Already In Cart List`, {
                position:'top-center'
            });
            return;
        }
        // if the same product exists in the wishList ==>
        else if (wishlist.find(wl=>wl.product_id===product.product_id)){
            toast.error(`${product.product_title} Already In Wish List`, {
                position:'top-center',
            });
            return;
        }
        // first time to add the product in wishlist===>
        else{
            setWishList([...wishlist, product]);
            return;
        }
    };

    // remove handler ===>
    
    const removeHandler = product =>{

        // find specific products ===>

        const cartItemRemover = cart.find(ca=>ca.product_id===product.product_id);
        const wishListItemRemover = wishlist.find(wl=>wl.product_id===product.product_id);

        if (cartItemRemover) {
            const updatedCart = cart.filter(ca=>ca.product_id!==product.product_id);
            setCart(updatedCart);
            return;
        }

        if (wishListItemRemover) {
            const updatedWishItem = wishlist.filter(wl=>wl.product_id!==product.product_id);
            setWishList(updatedWishItem);
            return;
        }
    }

    

    return (
        <div>
            
        </div>
    );
};

export default CustomContext;