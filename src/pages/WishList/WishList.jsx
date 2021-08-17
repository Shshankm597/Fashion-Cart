import { useCart } from "../../Context/cartContext";
import { EmptyWishlist } from "./EmptyWishlist";

export function WishList() {
  const { wishList, cartDispatch } = useCart();
  return (
    <>
      <h2> My Wishlist </h2>
      {wishList.map(
        ({
          _id,
          name,
          price,
          inStock,
          level,
          fastDelivery,
          productName,
          image,
          qty
        }) => {
          return (
            <div
              key={_id}
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
                src={image}
                width="100%"
                height="auto"
                alt={productName}
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
                    _id
                  })
                }
              >
                <i className="fa fa-times"></i>
              </button>
              <div>
                <h3> {name} </h3>
                <p> Rs. {price} </p>
                <button
                  style={{ margin: "0.2rem" }}
                  className="btn btn-primary"
                  onClick={() => {
                    cartDispatch({
                      type: "ADD_CART_ITEM",
                      item: {
                        _id,
                        name,
                        price,
                        inStock,
                        level,
                        fastDelivery,
                        image,
                        qty
                      }
                    });
                    cartDispatch({
                      type: "REMOVE_WISHLIST_ITEM",
                      _id
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
