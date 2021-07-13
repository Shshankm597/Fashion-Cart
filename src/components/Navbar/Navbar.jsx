import { useCart } from "../../pages/Cart/cart-context";
import { Link, NavLink } from "react-router-dom";
import { IoBookmarkOutline, IoBagOutline } from 'react-icons/io5';
import "./navbar.css";


export function Navbar() {
    const { cartItems, wishList } = useCart();

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
              <span className={cartItems.length > 0 ? "count-badge" : null}>
                {cartItems.length > 0 ? cartItems.length : null}
              </span>
            </NavLink>
        </div>
      </nav>
    )
}