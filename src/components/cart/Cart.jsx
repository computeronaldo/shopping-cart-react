import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "./Cart.scss";
import { useCartStore } from "../../store/cart-store";

function Cart() {
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalAmount = useCartStore((state) => state.totalAmount);

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

  const handleNavigateToProducts = () => {
    navigate("/");
  };
  return (
    <>
      <div className="backdrop"></div>
      <div className="cart-container">
        <div className="cart-inner-container">
          <h2>Cart</h2>
          {cart.map((product) => {
            return (
              <div key={product.id} className="cart-item">
                <span>{product.name}</span>
                <div className="cart-item-info">
                  <button
                    className="remove-from-cart-btn"
                    onClick={() => {
                      removeFromCart(product);
                      showToast("Removed from cart", "remove");
                    }}
                  >
                    Remove
                  </button>
                  <span>${Math.floor(product.quantity * product.price)}</span>
                </div>
              </div>
            );
          })}
          {cart.length > 0 && (
            <div className="total-amount">Total: ${totalAmount}</div>
          )}
          {cart.length > 0 && (
            <button
              className="clear-cart-btn"
              onClick={() => {
                clearCart();
                showToast("Cart Cleared", "clear");
              }}
            >
              Clear Cart
            </button>
          )}
        </div>
        <div>
          <button className="close-cart-btn" onClick={handleNavigateToProducts}>
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
