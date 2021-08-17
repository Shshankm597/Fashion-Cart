import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./Context/cartContext";
import { ProductProvider } from "./Context/productContext";
import { AuthProvider } from "./Context/authContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
      <CartProvider>
        <Router>
          <App />
        </Router>
      </CartProvider>
      </ProductProvider>
    </AuthProvider>
  </StrictMode>,
  rootElement
);
