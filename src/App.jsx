import { Routes, Route } from "react-router-dom";
import { Cart, Products, WishList, NotFound } from "./Routes";
import { useCart } from "./cart-context";
import { SearchBar } from "./SearchBar"
import "./styles.css";

import { NavLink } from "react-router-dom";

export default function App() {
  const { cartItems, wishList } = useCart();

  return (
    <div className="App">
      <header
        style={{
          position: "initial",
          zIndex: "0",
          backgroundColor: "#2874f0",
          borderTopWidth: "0",
          color: "white"
        }}
      >
        <h1 className="app-header"> Fashion-Cart</h1>
        <SearchBar />
        <nav className="nav-style">
          <NavLink end className="nav-item" to="/">
            {" "}
            HOME{" "}
          </NavLink>

          <NavLink className="nav-item" to="/cart">
            CART{" "}
            <span className={cartItems.length > 0 ? "count-badge" : null}>
              {cartItems.length > 0 ? cartItems.length : null}
            </span>
          </NavLink>

          <NavLink className="nav-item" to="/wishlist">
            WISHLIST{" "}
            <span className={wishList.length > 0 ? "count-badge" : null}>
              {wishList.length > 0 ? wishList.length : null}
            </span>
          </NavLink>
        </nav>
      </header>

      <div className="app-body">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
