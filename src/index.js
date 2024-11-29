import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/cart/Cart";
import App from "./App";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="app">
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </div>
  </React.StrictMode>
);
