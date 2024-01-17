import React from 'react';
import { useProductContext } from '../Context/SigmaContextApi';
import { useParams } from 'react-router-dom';
import SigmaProductDisplay from '../Components/SigmaProductDisplay/SigmaProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const SigmaPage = () => {
  const { products } = useProductContext(); // Assuming 'useProductContext' handles data fetching
  const { productIdd } = useParams();
  const productss = products.find((e) => e.id === Number(productIdd));

  console.log("sigma Product id", productss);

  if (!productss) {
    return <div>Error: Product not found!</div>;
  }

  return (
    <div>
      <SigmaProductDisplay sigma={productss} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default SigmaPage;
