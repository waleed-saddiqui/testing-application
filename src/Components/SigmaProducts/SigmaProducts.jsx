import React from 'react';
import './SigmaProducts.css';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { useProductContext } from '../../Context/SigmaContextApi';



const SigmaProducts = () => {
    
const {products} = useProductContext();
console.log("hurrry",products);

    return (
        <div className="product-container">
            {products.map((product, productKey) => (
                <div className="product-item" key={productKey}>
                    <div className="product-info">
                        <Link to={`/sigmaproduct/${product.id}`}>
                            {/* Use Link to navigate to the product details page */}
                            <input type="hidden" value={product.id} />
                            <div className="product-images">
                                {product.images.map((image, imageKey) => (
                                    <img
                                        key={imageKey}
                                        src={image.src}
                                        alt=""
                                        className="product-image"
                                    />
                                ))}
                            </div>
                        </Link>

                        <p className="product-title">{product.title}</p>
                    </div>

                    <div className="product-variants">
                        {product.variants.map((variant, variantKey) => (
                            <div key={variantKey} className="product-price">
                                <div className="price">${variant.price}</div>
                                <div className="compare-price">${variant.compare_at_price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SigmaProducts; 
