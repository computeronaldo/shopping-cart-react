import React from "react";
import { useCartStore } from "./store/cart-store";

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <span>{product.name}</span>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </div>
        );
      })}
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
}

export default Cart;
