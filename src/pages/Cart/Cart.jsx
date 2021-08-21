import { useCart } from "../../Context/cartContext";
import { EmptyCart } from "./EmptyCart";

const getCartAmount = (items) => {
  console.log(items, "getCartAmount from cart")
  return items.reduce((total, { price, qty }) => total + price * qty, 0);
};

export function Cart() {
  const { cart, cartDispatch } = useCart();
  console.log(cart, "cart hai ye")

  return (
    <>
      <h2> My Cart </h2>
      {cart.length > 0 && (
        <h2>Total cart value: {getCartAmount(cart)}</h2>
      )}
      {cart.map(
        ( items ) => {
          console.log(items, "item aya")
          if (items.qty >= 1) {
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
                    borderRadius: "0.5rem",
                    width: "fit-content",
                    position: "absolute",
                    top: "0.1em",
                    right: "0.1em",
                    border: "none",
                    fontSize: "1.5rem",
                    background: "white",
                    color: "gray"
                  }}
                  onClick={() =>
                    cartDispatch({
                      type: "REMOVE_CART_ITEM",
                      _id: (items._id)
                    })
                  }
                >
                  <i className="fa fa-times"></i>
                </button>
                <div>
                  <h3> {items.name} </h3>
                  <div>Rs. {items.price}</div>
                  {items.inStock && <div> In Stock </div>}
                  {!items.inStock && <div> Out of Stock </div>}
                  {items.fastDelivery ? (
                    <div> Fast Delivery </div>
                  ) : (
                    <div> 3 days minimum </div>
                  )}
                  <section>
                    <button
                      style={{ width: "fit-content", margin: "0 0.3rem" }}
                      onClick={() => {
                        items.qty > 1 ?
                        cartDispatch({
                          type: "DECREMENT_QTY",
                          _id: (items._id)
                        }) : cartDispatch({
                          type: "REMOVE_CART_ITEM",
                          _id: (items._id)
                        })
                      }
                      }
                    >
                      {" "}
                      -{" "}
                    </button>
                    {items.qty}
                    <button
                      style={{ width: "fit-content", margin: "0 0.3rem" }}
                      onClick={() =>
                        cartDispatch({
                          type: "INCREMENT_QTY",
                          _id: (items._id)
                        })
                      }
                    >
                      {" "}
                      +{" "}
                    </button>
                  </section>
                </div>
              </div>
            );
          }
          return null; // check if doing this is not a bad practice else check for a better solution
        }
      )}
      {cart.length < 1 && <EmptyCart />}
    </>
  );
}
