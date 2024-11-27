import React from "react";
import { useCartStore } from "../../store/cart-store";
import "./Products.scss";

function ProductList({ products }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="products-container">
      {products.map((product) => {
        const productInCart = cart?.find(
          (cartItem) => cartItem.id === product.id
        );
        const productQuantityInCart = productInCart?.quantity || 0;

        return (
          <div key={product.id} className="product-container">
            <div className="product-info-container">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
            <div className="product-actions-btn-grp">
              <button
                className="add-to-cart-btn"
                onClick={() => removeFromCart(product.id)}
              >
                Remove From Cart
              </button>
              <span>{productQuantityInCart}</span>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
