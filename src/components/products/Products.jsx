import React from "react";
import { useCartStore } from "../../store/cart-store";
import "./Products.scss";

function ProductList({ products }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <div key={product.id} className="product-container">
            <div className="product-info-container">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
