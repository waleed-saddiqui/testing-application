import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';



export const ShopContext = createContext(null);


const getDefaultCart = ()=>{
    let cart = {};
    
    for(let index = 0; index<all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}




const ShopContextProvider = (props)=>{

    const [cartItems, setCartItems] = useState(getDefaultCart());

  
   
    const addToCart = (itemId) => {

        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
            console.log("Item ID:", itemId);
            console.log("Updated Cart:", updatedCart);
            return updatedCart;
        });

    }
    
   // remove product with decrement of -1

    const removeFromCart = (itemId) => {

        setCartItems((prev) => {
            const removeCart = { ...prev, [itemId]: prev[itemId] - 1 };
            console.log("cartItems", removeCart);
            return removeCart ;
        });

    }

       //remove entire product 

    const removeEntireFromCart = (itemId) => {
        setCartItems((prev) => {
            const removeCart = { ...prev };
            console.log("removeCart",removeCart);
            delete removeCart[itemId]; // Remove the entire product
    
            console.log("cartItems", removeCart);
            return removeCart;
        });
    }


    const getTotalCartAmount = () => {
        let totalAmount = 0;
    
        for (const item in cartItems) {
            if (cartItems[item] > 0) {

                let itemInfo = all_product.find((product) => product.id === Number(item));

                console.log("itemInfo", itemInfo);
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
    
        return totalAmount;
    };
    

    const getTotalCartItems = () => {
        let totalAmount = 0;
    
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalAmount += cartItems[item];
            }
        }
    
        return totalAmount;
    };


    
    


    const contextValue = {removeEntireFromCart,getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

    return(

        <ShopContext.Provider value={contextValue}>
            
            {props.children}
       

        </ShopContext.Provider>

    ) 
}

export default ShopContextProvider; 