import { Routes, Route } from "react-router-dom";
import { Home, Cart, Products, WishList, NotFound } from "./pages";
import { Navbar, Footer } from "./components"
import "./styles.css";

export default function App() {

  return (
    <div className="App">

      <Navbar />
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
