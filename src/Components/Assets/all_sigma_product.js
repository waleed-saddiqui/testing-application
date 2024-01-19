import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchApiData = () => {
  const [products, setProducts] = useState([]);


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

  useEffect(() => {
    const API = 'http://localhost:3400/getdata';
    getApiData(API);
  }, []);

  return (
    <></>
  );
};

export default FetchApiData;