import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const productCustomContext = createContext();
export const useProduct = ()=> useContext(productCustomContext);

const CustomContext = ({children}) => {
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
            toast.success(`${product.product_title} Added To Cart`, {
                position:'top-center',
            });
            setCart([...cart , {...product , quantity:1}]);
            return;
        }
    };
    // product decrement handler ===> 
    const productDecrementHandler = product =>{
        const found = cart.find(ca=>ca.product_id===product.product_id);
        // if expected product not in the cart===>
        if (!found) {
            toast.error(`${product.product_title} Not In the Cart List`, {
                position:'top-center',
            });

            return;
        }
        else {
            const updatedItems = cart.map(ca=>{
                if (ca.product_id===product.product_id) {
                    if (ca.quantity>0) {
                        toast.info(`${product.product_title} Remains ${ca.quantity-1} Unit.`)
                        return {...ca, quantity:ca.quantity-1}
                    }
                    else {
                        toast.error(`${product.product_title} Removed From The Cart`)
                        return null;
                    }
                }
                return ca; 
            }).filter(Boolean);

            setCart(updatedItems);
        }
    } 
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
            toast.success(`${product.product_title} Added To Wish List`, {
                position:'top-center',
            });

            setWishList([...wishlist, product]);
            return;
        }
    };

    //moving wish list to add to cart ===> 
        
    const moveCartToWishListHandler = product =>{
        const selectedProduct = wishlist.find(wl=>wl.product_id===product.product_id);

        if (selectedProduct) {
          setCart([...cart ,{...product, quantity:1}]);
          const removedProduct = wishlist.filter(wl=>wl.product_id!==product.product_id);
          setWishList(removedProduct);
        }

        toast.info(`${product.product_title} moved to Cart List`, {
            position:`top-center`,
        });

        return;
    }

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

    const value = {cart, wishlist, cartHandler, productDecrementHandler, moveCartToWishListHandler, wishListHandler, removeHandler};

    return (
        <productCustomContext.Provider value={value}>
            {children}
        </productCustomContext.Provider>
    );
};

export default CustomContext;