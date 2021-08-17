import emptyCart from "../../images/empty_cart.svg";

export function EmptyCart() {
  return (
    <div className="empty-cart-wishlist">
      <img className="empty-cart-wishlist-image" src={emptyCart} alt="empty_cart" />
      <p> Your cart is empty! </p>
      <medium> It's a good day to buy something! </medium>
    </div>
  );
}
