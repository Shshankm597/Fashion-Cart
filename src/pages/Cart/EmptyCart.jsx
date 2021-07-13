export function EmptyCart() {
  return (
    <div className="empty-cart-wishlist">
      <img
        src="images/empty_cart.svg"
        alt="Empty Cart"
        width="100%"
        height="auto"
        style={{ maxWidth: "300px" }}
      />
      <p> Your cart is empty! </p>
      <small> It's a good day to buy something! </small>
    </div>
  );
}
