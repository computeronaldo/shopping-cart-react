import "./App.css";
import Cart from "./Cart";
import ProductList from "./ProductList";
import { PRODUCTS } from "./products";

function App() {
  return (
    <div className="App">
      <h3>Welcome to the store</h3>
      <ProductList products={PRODUCTS} />
      <Cart />
    </div>
  );
}

export default App;
