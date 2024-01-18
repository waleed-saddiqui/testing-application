import React from 'react'
import { useProductContext } from '../../Context/SigmaContextApi';

const SigmaCartItems = () => {
    const {products ,cartItemss} = useProductContext();

    console.log("Add product in cart", products);
    console.log("cartitemss in cart", cartItemss);

  return (
    <div className='sigma-cart-items'>
        <h1>hello</h1>
       {
                products.map((l)=>{
                    if(cartItemss[l.id] > 0){

                        return(
                            <>
                           <div className="sigma-cart-items" key={l.id}>
                           <h1>{l.title}</h1>
                           </div>
                            </>
                        )

                    }

                })
            }
    </div>
  )
}

export default SigmaCartItems
