import axios from "axios";
import { useCart } from "../../Context/cartContext";
import { checkItem } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useFilters } from "../../useFilter";
import { FilterUI, Spinner } from "../../components"
import { useEffect } from "react";
import { API_PRODUCTS } from "../../urls";
import { useProduct } from "../../Context/productContext";
import { IoBookmark } from 'react-icons/io5';

import "./products.css";

export function Products() {
  const { cart, wishList, cartDispatch } = useCart();
  const { setProductData } = useProduct();
  const { filteredData } = useFilters();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data: {products} } = await axios.get(API_PRODUCTS);
      console.log(products, "from product fetch URL");
      setProductData(products);
    })();
    }, []);

  return (
    <div className="container">

      <FilterUI />

      <div className="page-content">
        {filteredData.length > 0 ? filteredData.map(
          ( items ) => {
            return (
              <div key={items._id} className="cart-card">
                <img
                  src={items.imageURL}
                  width="100%"
                  height="auto"
                  alt={items.name}
                  style={{
                    maxWidth: "100%"
                  }}
                />
                <div className="cart-card-text">
                  <h3> {items.name} </h3>
                  <div>Rs. {items.price}</div>
                  {items.fastDelivery && <div> Fast Delivery </div>}
                  {items.inStock && (
                    <div
                      className="in-stock-text-style"
                    >
                      {" "}
                      In Stock{" "}
                    </div>
                  )}
                  {!items.inStock && (
                    <div
                      className="out-of-stock-text-style"
                    >
                      {" "}
                      Out of Stock{" "}
                    </div>
                  )}
                  <button
                    className={`${!items.inStock ? "btn-disabled" : "btn"}`}
                    disabled={!items.inStock}
                    onClick={() => {
                      checkItem(cart, items._id)
                        ? navigate("/cart")
                        : cartDispatch({
                            type: "ADD_CART_ITEM",
                            item: { items, qty: 1 }
                          });
                    }}
                  >
                    {!items.inStock
                      ? "Out of Stock"
                      : checkItem(cart, items._id)
                      ? "Move to cart"
                      : "Add to cart"}
                  </button>
                  <button
                    className={`wishlist-item-icon-heart ${checkItem(wishList, items._id) && "wishlist-item-icon-heart-added"}`}
                    onClick={() => {
                      checkItem(wishList, items._id)
                        ? cartDispatch({
                            type: "REMOVE_WISHLIST_ITEM",
                            item: {items}
                          })
                        : cartDispatch({
                            type: "ADD_WISHLIST_ITEM",
                            item: {
                              items,
                              qty: 1
                            }
                          });
                    }}
                  >
                    <IoBookmark />
                  </button>
                </div>
              </div>
            );
          }
        ) : <Spinner />}
      </div>
    </div>
  );
}
