import axios from "axios";
import { useCart } from "../Cart/cart-context";
import { checkItem } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useFilters } from "../../hook/useFilter";
import { FilterUI } from "../../components/FilterUI";
import { useEffect } from "react";
import { API_PRODUCTS } from "../../urls";
import { useProduct } from "./productContext";

import "./products.css";

export function Products() {
  const { cartItems, wishList, cartDispatch } = useCart();
  const { setProductData } = useProduct();
  const { filteredData } = useFilters();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await axios.get(API_PRODUCTS);
      // console.log(response)
      setProductData(response.data);
    })();
    }, []);

  return (
    <div className="container">

      <FilterUI />

      <div className="page-content">
        {filteredData.map(
          ({
            _id,
            name,
            image,
            price,
            productName,
            inStock,
            level,
            fastDelivery
          }) => {
            return (
              <div key={_id} className="cart-card">
                <img
                  src={image}
                  width="100%"
                  height="auto"
                  alt={productName}
                  style={{
                    maxWidth: "280px"
                  }}
                />
                <div style={{ padding: "0 1rem" }}>
                  <h3> {name} </h3>
                  <div>Rs. {price}</div>
                  {fastDelivery && <div> Fast Delivery </div>}
                  {inStock && (
                    <div
                      className="in-stock-text-style"
                    >
                      {" "}
                      In Stock{" "}
                    </div>
                  )}
                  {!inStock && (
                    <div
                      className="out-of-stock-text-style"
                    >
                      {" "}
                      Out of Stock{" "}
                    </div>
                  )}
                  <button
                    className={`${!inStock ? "btn-disabled" : "btn"}`}
                    disabled={!inStock}
                    onClick={() => {
                      checkItem(cartItems, _id)
                        ? navigate("/cart")
                        : cartDispatch({
                            type: "ADD_CART_ITEM",
                            item: {
                              _id,
                              name,
                              price,
                              inStock,
                              level,
                              fastDelivery,
                              image,
                              qty: 1
                            }
                          });
                    }}
                  >
                    {!inStock
                      ? "Out of Stock"
                      : checkItem(cartItems, _id)
                      ? "Move to cart"
                      : "Add to cart"}
                  </button>
                  <button
                    className={`wishlist-item-icon-heart ${checkItem(wishList, _id) && "wishlist-item-icon-heart-added"}`}
                    onClick={() => {
                      checkItem(wishList, _id)
                        ? cartDispatch({
                            type: "REMOVE_WISHLIST_ITEM",
                            _id
                          })
                        : cartDispatch({
                            type: "ADD_WISHLIST_ITEM",
                            item: {
                              _id,
                              name,
                              price,
                              inStock,
                              level,
                              fastDelivery,
                              productName,
                              image,
                              qty: 1
                            }
                          });
                    }}
                  >
                    <i className="fa fa-heart"></i>{" "}
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
