import { useCart } from "../../Context/cartContext";
import { EmptyWishlist } from "./EmptyWishlist";

export function WishList() {
  const { wishList, cartDispatch } = useCart();
  return (
    <>
      <h2> My Wishlist </h2>
      {wishList.map(
        (items) => {
          return (
            <div
              key={items._id}
              style={{
                display: "flex",
                flexDirection: "coloumn",
                gap: "1rem",
                border: "1px solid #4B5563",
                borderRadius: "0 0 0.5rem 0.5rem",
                margin: "1rem",
                maxWidth: "50%",
                position: "relative"
              }}
            >
              <img
                className="img"
                src={items.imageURL}
                width="100%"
                height="auto"
                alt={items.name}
                style={{
                  maxWidth: "250px"
                }}
              />
              <button
                style={{
                  margin: "0.2rem",
                  borderRadius: "50%",
                  width: "fit-content",
                  position: "absolute",
                  top: "1em",
                  right: "1em",
                  border: "none",
                  fontSize: "large"
                }}
                onClick={() =>
                  cartDispatch({
                    type: "REMOVE_WISHLIST_ITEM",
                    _id: (items._id)
                  })
                }
              >
                <i className="fa fa-times"></i>
              </button>
              <div>
                <h3> {items.name} </h3>
                <p> Rs. {items.price} </p>
                <button
                  style={{ margin: "0.2rem" }}
                  className="btn btn-primary"
                  onClick={() => {
                    cartDispatch({
                      type: "ADD_CART_ITEM",
                      item: { ...items, qty: 1 }
                    })
                    cartDispatch({
                      type: "REMOVE_WISHLIST_ITEM",
                      _id: (items._id)
                    });
                  }}
                >
                  Move to cart
                </button>
              </div>
            </div>
          );
        }
      )}
      {wishList.length < 1 && <EmptyWishlist />}
    </>
  );
}
