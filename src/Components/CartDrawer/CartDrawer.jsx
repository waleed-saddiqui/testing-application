import React, { useState, useContext} from 'react';
import './CartDrawer.css';
import { ShopContext } from '../../Context/ShopContext';

const CartDrawer = () => {

    const { getTotalCartAmount, removeEntireFromCart, addToCart, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  const [cartVisible, setCartVisible] = useState(false);

  const openCart = () => {
    setCartVisible(true);
  };

  const closeCart = () => {
    setCartVisible(false);
  };

  return (
    <>
      <div className="cartdrawer">
        <button id="openCart" onClick={openCart}>
          Open Cart
        </button>
        <div id="cartDrawer" className={`cart-drawer ${cartVisible ? 'open' : ''}`}>
          <div className="cart-header">
            <span id="closeCart" onClick={closeCart}>
              ×
            </span>
            <h2>Your Cart</h2>
          </div>
          <div className="cart-items">
          <hr />

{all_product.map((e) => {
    if (cartItems[e.id] > 0) {
        return (
          <>
            <div key={e.id} className="drawer-cartitems-format drawer-cartitems-format-main">
                <img className='drawer-carticon-product-icon' src={e.image} alt="" />
               <div className='drawe-alignment'>
               <p>{e.name}</p>
                <div className="drawer-cart-item-list">
                <p>${e.new_price}</p>

<div className='drawer-counter'>
<span onClick={() => { removeFromCart(e.id) }}>-</span>     
<button className='drawer-cartitems-quantity'>{cartItems[e.id]}</button> 
<span onClick={() => { addToCart(e.id) }}>+</span>


</div>

{/* <p>${e.new_price * cartItems[e.id]}</p> */}
<svg style={{ width: 18, marginLeft: "30px", cursor: "pointer", color: "red" }} onClick={() => { removeEntireFromCart(e.id) }}
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
                {/* <img className='cartitems-remove-icon' src={remove_icon}  alt="" /> */}
                

               </div>

               
            </div>
            <hr />

           
          </>
        );
    }
    return null; // To satisfy React's requirement of returning a value from map.
})}
            </div>
           <div className="drawer-total-result">
           <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>

                        <div className="cartitems-total-items">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>

                    </div>

                    <button>Proceed To Checkout</button>

                </div>

                
            </div>
           </div>
        </div>
      </div>
      {/* Your other HTML content */}
      
    </>
  );
};

export default CartDrawer;
