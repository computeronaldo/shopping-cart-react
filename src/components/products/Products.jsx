import React from "react";
import { useCartStore } from "../../store/cart-store";
import "./Products.scss";

function ProductList({ products }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cartItemQuantity = useCartStore((state) => state.cartItemQuantity);

  return (
    <div className="products-container">
      {products.map((product) => {
        const productQuantityInCart =
          (cartItemQuantity && cartItemQuantity[product.id]) || 0;

        return (
          <div key={product.id} className="product-container">
            <div className="product-info-container">
              <h3 className="product-info-name">{product.name}</h3>
              <p>{product.description}</p>
            </div>
            <div className="product-actions-btn-grp">
              <button
                className="add-to-cart-btn"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
              <span>{productQuantityInCart}</span>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
