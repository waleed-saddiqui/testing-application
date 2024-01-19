import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  

  const getSigmaCart = () => {
    let newCart = {};
    for (let index = 0; index < products.length; index++) {
      newCart[index] = 0;
    }
    return newCart;
   
  };
  //console.log("aaaaabbb", getSigmaCart());
  

  const addToCart = (productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      //console.log("aaaaa",newCart );
      newCart[productId] = (newCart[productId] || 0) + 1;
      return newCart;
    });
  };

// remove cart item

  const removeToCart = (productId) => {
    setCart((prevCart) => {
      const RemoveNewCart = { ...prevCart };
      console.log("aaaaa",RemoveNewCart );
      RemoveNewCart[productId] = (RemoveNewCart[productId] || 0) - 1;
      return RemoveNewCart;
    });
  };

    //remove entire product 

    const SigmaRemoveEntireFromCart = (productId) => {
      setCart((prev) => {
          const SigmaRemoveCart = { ...prev };
          console.log("removeCart",SigmaRemoveCart);
          delete SigmaRemoveCart[productId]; // Remove the entire product
  
          console.log("cartItems", SigmaRemoveCart);
          return SigmaRemoveCart;
      });
  }


  // get total cart amount

  const SigmaTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cart) {
      //console.log("total", item);
      
        if (cart[item] > 0) {

            let itemInfo = products.find((product) => product.id === Number(item));

            totalAmount += itemInfo.variants.map((p) => p.price).reduce((acc, price) => acc + price, 0) * cart[item];

            //console.log("Total",totalAmount );

            
        }
    }

    return totalAmount;
};

// get total cart item

const SigmaTotalCartItems = () => {
  let totalAmount = 0;

  for (const item in cart) {
      if (cart[item] > 0) {
          totalAmount += cart[item];
      }
  }

  return totalAmount;
};


  useEffect(() => {
    const API = 'http://localhost:3400/getdata';

    const getApiData = async (url) => {
      try {
        const res = await axios.get(url);
        const productApi = res.data.products;
        setProducts(productApi);
        console.log("Sigma Products context Api", productApi);
        setCart(getSigmaCart());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getApiData(API);
  }, []);

  const getSigmaContextValue = { products, cart, addToCart, removeToCart, SigmaTotalCartAmount, SigmaTotalCartItems,SigmaRemoveEntireFromCart };

  return (
    <ProductContext.Provider value={getSigmaContextValue}>
      {children}
    </ProductContext.Provider>
  );
};
