import { useNavigate } from "react-router-dom";
import "./Cart.scss";
import { useCartStore } from "../../store/cart-store";

function Cart() {
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleNavigateToProducts = () => {
    navigate("/");
  };
  return (
    <>
      <div className="backdrop"></div>
      <div className="cart-container">
        <div>
          <h2>Cart</h2>
          {cart.map((product) => {
            return (
              <div key={product.id} className="cart-item">
                <span>{product.name}</span>
                <div className="cart-item-info">
                  <span>{product.quantity}</span>
                  <button
                    className="remove-from-cart-btn"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          {cart.length > 0 && (
            <button className="clear-cart-btn" onClick={clearCart}>
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
