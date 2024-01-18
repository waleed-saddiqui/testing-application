import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};





export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getSigmaCart = () => {
    let cartt = {};

    for (let index = 0; index < products.length + 1; index++) {
      cartt[index] = 0;
    }
    return cartt;
  };

  console.log("aaaaaabbbb", getSigmaCart());

  const [cartItemss, setCartItemss] = useState(getSigmaCart());



  console.log("bbbbbbbb", cartItemss);

  const addSigmaCart = (itemId) => {
    setCartItemss((prevv) => {
      const updatedCart = { ...prevv, [itemId]: prevv[itemId] + 1 };
      
      console.log("Sigma Item ID:", itemId);
      console.log("Sigma Updated Cart:", updatedCart);
      return updatedCart;
    });
  };

  useEffect(() => {
    const API = 'http://localhost:3400/getdata';

    const getApiData = async (url) => {
      try {
        const res = await axios.get(url);
        const productApi = res.data.products;
        setProducts(productApi);
        console.log("Sigma Products context Api", productApi);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getApiData(API);
  }, []);

  return (
    <ProductContext.Provider value={{ products, addSigmaCart, cartItemss }}>
      {children}
    </ProductContext.Provider>
  );
};
