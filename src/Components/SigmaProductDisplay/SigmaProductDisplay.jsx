// SigmaProductDisplay.js

import React from 'react';
import './SigmaProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const SigmaProductDisplay = ({ sigma }) => {
  return (
    <div className='productdisplay'>

    <div className="productdisplay-left">

      <div className="productdisplay-img-list">
          <img src={sigma.image.src} alt="" />
          <img src={sigma.image.src} alt="" />
          <img src={sigma.image.src} alt="" />
          <img src={sigma.image.src} alt="" />
      </div>

      <div className="productdisplay-img">
          <img src={sigma.image.src} alt="" className="productdisplay-main-img" />
      </div>

    </div>


    <div className="productdisplay-right">
      <h1>{sigma.title}</h1>

      <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" /> 
          <p>(122)</p>
      </div>

      <div className="productdisplay-right-prices">
         
          {sigma.variants.map((variant, variantKey) => (

<div key={variantKey} className="product-price">

  <div className="productdisplay-right-old-price">${variant.compare_at_price}</div>

  <div className="productdisplay-right-new-price">${variant.price}</div>
  
</div>
))}
      </div>

      <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Minima ratione excepturi doloribus ducimus quia cum.
      </div>

      <div className="productdisplay-right-sizes">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
          </div>
      </div>

      <button>ADD TO CART</button>
      
      <p className='productdisplay-right-category'><span>Category : </span>Women, T-Shirt, Crop-Top</p>
      <p className='productdisplay-right-category'><span>Tags : </span>Modern, Latest</p>
    </div>

  </div>
  );
};

export default SigmaProductDisplay;
