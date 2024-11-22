import "./App.css";
import Cart from "./Cart";
import ProductList from "./ProductList";
import { PRODUCTS } from "./products";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <h3>Welcome to the store</h3>
      <ProductList products={PRODUCTS} />
      <Cart />
    </div>
  );
}

export default App;
