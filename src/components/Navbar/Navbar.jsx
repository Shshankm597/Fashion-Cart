import { useCart } from "../../Context/cartContext";
import { useAuth } from "../../Context/authContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoBookmarkOutline, IoBagOutline } from 'react-icons/io5';
import "./navbar.css";


export function Navbar() {
    const { cart, wishList } = useCart();
    const { isUserLogin, logoutManager } = useAuth();
    const navigate = useNavigate();

    return (
        <nav className="navbar">
        <Link className="navbar-brand" to="/">Fashion-Cart</Link>
        
        <div className="nav-item-group">
            <NavLink end className="nav-item" to="/products">
              Shop
            </NavLink>
            <NavLink className="nav-item" to="/wishlist">
              <IoBookmarkOutline size="1.5em" />
              <span className={wishList.length > 0 ? "count-badge" : null}>
                {wishList.length > 0 ? wishList.length : null}
              </span>
            </NavLink>
            <NavLink className="nav-item" to="/cart">
              <IoBagOutline size="1.5em"/>
              <span className={cart.length > 0 ? "count-badge" : null}>
                {cart.length > 0 ? cart.length : null}
              </span>
            </NavLink>
            {!isUserLogin && (
            <NavLink end className="nav-item" to="/login">
            Login ✥ Register
            </NavLink>
            )}
            {isUserLogin && (
              <button
              onClick={() => logoutManager(navigate)}
              className="btn nav-item"
            >
              Logout
            </button>
            )}
        </div>
      </nav>
    )
}