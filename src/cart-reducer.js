export function cartReducer(state, { type, _id, item }) {
  const { cartItems, wishList } = state;
  switch (type) {
    case "INCREMENT_QTY":
      return {
        ...state,
        cartItems: cartItems.map((cartItem) =>
          cartItem._id === _id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
        )
      };

    case "DECREMENT_QTY":
      return {
        ...state,
        cartItems: cartItems.map((cartItem) =>
          cartItem._id === _id ? { ...cartItem, qty: cartItem.qty - 1 } : cartItem
        )
      };

    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cartItems: cartItems.filter((cartItem) => cartItem._id !== _id)
      };
    case "ADD_CART_ITEM":
      return {
        ...state,
        cartItems: cartItems.concat(item)
      };
    case "ADD_WISHLIST_ITEM":
      return {
        ...state,
        wishList: wishList.concat(item)
      };
    case "REMOVE_WISHLIST_ITEM":
      return {
        ...state,
        wishList: wishList.filter((wishlistItem) => wishlistItem._id !== _id)
      };
    default:
      return { state };
  }
}
