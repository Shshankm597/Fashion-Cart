import emptyWishlist from "../../images/Wishlist.svg";

export function EmptyWishlist() {
  return (
    <div className="empty-cart-wishlist">
      <img className="empty-cart-wishlist-image" src={emptyWishlist} alt="empty_wishllist"/>
      <p> Your wishlist is empty! </p>
      <medium> Explore our wide range of products and save them to buy later! </medium>
    </div>
  );
}
