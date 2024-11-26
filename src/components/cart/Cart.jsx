import "./Cart.scss";
import { useCartStore } from "../../store/cart-store";

function Cart({ setShowCart }) {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleCloseCartBtnClick = () => {
    setShowCart(false);
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
                <button onClick={() => removeFromCart(product.id)}>
                  Remove
                </button>
              </div>
            );
          })}
          {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
        </div>
        <div>
          <button className="close-cart-btn" onClick={handleCloseCartBtnClick}>
            Close Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
