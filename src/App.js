import { useNavigate } from "react-router-dom";
import ProductList from "./components/products/Products";
import { PRODUCTS } from "./constants/products";
import "./App.scss";

function App() {
  const navigate = useNavigate();

  const handleNavigateToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="app-header">
      <div className="app-header-nav">
        <h3>Welcome To The Store</h3>
        <span onClick={handleNavigateToCart}>Cart</span>
      </div>
      <ProductList products={PRODUCTS} />
    </div>
  );
}

export default App;
