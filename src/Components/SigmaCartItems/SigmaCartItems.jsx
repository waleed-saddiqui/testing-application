import React from 'react';
import { useProductContext } from '../../Context/SigmaContextApi';
import './SigmaCartItems.css';

const SigmaCartItems = () => {
    const { products, cart,addToCart, removeToCart, SigmaRemoveEntireFromCart } = useProductContext();

    //console.log("Add product in cart", products);
    //console.log("cartitemss in cart", cart);

    return (
        <div className='sigma-cart-items-main'>
          
            {
                products.map((l) => {
                    if (cart[l.id] > 0) {
                        return (
                            <>
                            <div style={{margin:'100px 170px'}} className="wrap">
                            <div className="sigma-cart-items" key={l.id}>
                               
                                {
                                    l.images.map((img, index) => {
                                        return (
                                            <img style={{height:'200px'}} key={index} src={img.src} alt='' />
                                        );
                                    })
                                }
                                 <h3>{l.title}</h3>

{l.variants.map((variant, variantKey) => (
                            <div key={variantKey} className="count-inner">
                                <div className="">${variant.price}</div>
                                <div className='counter'>
                            <span onClick={() => { removeToCart(l.id) }}>-</span>     
                            <button className='cartitems-quantity'>{cart[l.id]}</button> 
                            <span onClick={() => { addToCart(l.id) }}>+</span>
                            

                            </div>
                                <div className="total">${(variant.price * cart[l.id]).toFixed(2)}</div>

                                <svg style={{ width: 18, margin: "0px 40px", cursor: "pointer", color: "red" }} onClick={() => { SigmaRemoveEntireFromCart(l.id) }}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 16 16"
  aria-hidden="true"
  focusable="false"
  className="icon icon-remove"
>
  <path
    d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z"
    fill="currentColor"
  />
  <path
    d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z"
    fill="currentColor"
  />
</svg>

                            </div>
                        ))}
                            </div>
                            
                            </div>
                            </>
                        );
                    }
                    return null; // Added to handle the case where cart[l.id] is not greater than 0
                })
            }
        </div>
    );
};

export default SigmaCartItems;
