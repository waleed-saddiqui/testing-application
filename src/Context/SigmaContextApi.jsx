import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  
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
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
