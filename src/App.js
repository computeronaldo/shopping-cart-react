import { useState } from "react";
import "./App.scss";
import Cart from "./components/cart/Cart";
import ProductList from "./components/products/Products";
import { PRODUCTS } from "./constants/products";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCartShowClick = () => {
    setShowCart(true);
  };

  return (
    <div className="app">
      <div className="app-header">
        <h3>Welcome To The Store</h3>
        <span onClick={handleCartShowClick}>Cart</span>
      </div>
      {showCart && <Cart setShowCart={setShowCart} />}
      {!showCart && <ProductList products={PRODUCTS} />}
    </div>
  );
}

export default App;
