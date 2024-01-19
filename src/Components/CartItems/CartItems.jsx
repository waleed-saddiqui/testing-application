import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
//import { useProductContext } from '../../Context/SigmaContextApi';

//import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
    const { removeEntireFromCart, addToCart, getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);


    return (
        <div className='cartitems'> 
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p> 
            </div>

            <hr />

            {all_product.map((e, i) => {
                if (cartItems[e.id] > 0) {
                    return (
                      <>
                        <div key={i} id={e.id} className="cartitems-format cartitems-format-main">
                            <img className='carticon-product-icon' src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>

                            <div className='counter'>
                            <span onClick={() => { removeFromCart(e.id) }}>-</span>     
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button> 
                            <span onClick={() => { addToCart(e.id) }}>+</span>
                            

                            </div>

                            <p>${e.new_price * cartItems[e.id]}</p>
                            {/* <img className='cartitems-remove-icon' src={remove_icon}  alt="" /> */}
                            <svg style={{ width: 18, margin: "0px 40px", cursor: "pointer", color: "red" }} onClick={() => { removeEntireFromCart(e.id) }}
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
                        <hr />
                      </>
                    );
                }
                return null; // To satisfy React's requirement of returning a value from map.
            })}


            

           

            
            
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>

                        <div className="cartitems-total-items">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>

                        <hr />

                        <div className="cartitems-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>

                        <hr />
                        <div className="cartitems-total-items">
                            <p>Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>

                    </div>

                    <button>Proceed To Checkout</button>

                </div>

                <div className="cartitems-promocode">
                    <p>If You Have a Promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    );

    
}

export default CartItems;
