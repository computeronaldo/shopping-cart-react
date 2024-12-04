import React from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { useCartStore } from "../../store/cart-store";
import "./Products.scss";

function ProductList({ products }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cartItemQuantity = useCartStore((state) => state.cartItemQuantity);

  const showToast = (message, type) => {
    Toastify({
      text: message,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        fontFamily: "'Monospace', sans-serif",
        background:
          type === "success"
            ? "linear-gradient(to right, #00b09b, #96c93d)"
            : "linear-gradient(to right, #ff5f6d, #ffc371)",
      },
    }).showToast();
  };

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
              <div>
                <h4>Price: ${product.price}</h4>
              </div>
            </div>
            <div className="product-actions-btn-grp">
              <button
                className={`add-to-cart-btn ${
                  productQuantityInCart === 0 && "disable-remove-btn"
                }`}
                onClick={() => {
                  removeFromCart(product);
                  showToast(`Removed ${product.name} from cart`, "error");
                }}
              >
                Remove
              </button>
              <span>{productQuantityInCart}</span>
              <button
                className="add-to-cart-btn"
                onClick={() => {
                  addToCart(product);
                  showToast(`Added ${product.name} to cart`, "success");
                }}
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
