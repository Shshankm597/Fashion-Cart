import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./pages/Cart/cart-context";
import { ProductProvider } from "./pages/Products/productContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ProductProvider>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
    </ProductProvider>
  </StrictMode>,
  rootElement
);
