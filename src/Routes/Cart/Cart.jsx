import { useCart } from "../../cart-context";
import { EmptyCart } from "./EmptyCart";

const getCartAmount = (items) => {
  return items.reduce((total, { price, qty }) => total + price * qty, 0);
};

export function Cart() {
  const { cartItems, cartDispatch } = useCart();
  return (
    <>
      <h1> My Cart </h1>
      {cartItems.length > 0 && (
        <h2>Total cart value: {getCartAmount(cartItems)}</h2>
      )}
      {cartItems.map(
        ({
          _id,
          name,
          image,
          price,
          productName,
          inStock,
          level,
          fastDelivery,
          qty
        }) => {
          if (qty >= 1) {
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
                      _id
                    })
                  }
                >
                  <i className="fa fa-times"></i>
                </button>
                <div>
                  <h3> {name} </h3>
                  <div>Rs. {price}</div>
                  {inStock && <div> In Stock </div>}
                  {!inStock && <div> Out of Stock </div>}
                  <div>{level}</div>
                  {fastDelivery ? (
                    <div> Fast Delivery </div>
                  ) : (
                    <div> 3 days minimum </div>
                  )}
                  <section>
                    <button
                      style={{ width: "fit-content", margin: "0 0.3rem" }}
                      onClick={() => {
                        qty > 1 ?
                        cartDispatch({
                          type: "DECREMENT_QTY",
                          _id
                        }) : cartDispatch({
                          type: "REMOVE_CART_ITEM",
                          _id
                        })
                      }
                      }
                    >
                      {" "}
                      -{" "}
                    </button>
                    {qty}
                    <button
                      style={{ width: "fit-content", margin: "0 0.3rem" }}
                      onClick={() =>
                        cartDispatch({
                          type: "INCREMENT_QTY",
                          _id
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
      {cartItems.length < 1 && <EmptyCart />}
    </>
  );
}
