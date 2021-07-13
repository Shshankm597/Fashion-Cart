export function EmptyWishlist() {
  return (
    <div className="empty-cart-wishlist">
      <img
        src="images/Wishlist.svg"
        alt="Empty Cart"
        width="100%"
        height="auto"
        style={{ maxWidth: "300px" }}
      />
      <p> Your wishlist is empty! </p>
      <small>
        {" "}
        Explore our wide range of products and save them to buy later!{" "}
      </small>
    </div>
  );
}
