import React from 'react';
import { useProductContext } from '../../Context/SigmaContextApi';

const SigmaCartItems = () => {
    const { products, cart,addToCart, removeToCart } = useProductContext();

    console.log("Add product in cart", products);
    console.log("cartitemss in cart", cart);

    return (
        <div className='sigma-cart-items'>
          
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
                            <div key={variantKey} className="">
                                <div className="">${variant.price}</div>
                                <div className='counter'>
                            <span onClick={() => { removeToCart(l.id) }}>-</span>     
                            <button className='cartitems-quantity'>{cart[l.id]}</button> 
                            <span onClick={() => { addToCart(l.id) }}>+</span>
                            

                            </div>
                                <div className=""><span>Total: </span>${variant.price * cart[l.id]}</div>
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
