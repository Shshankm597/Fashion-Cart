import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../Reducer/cartReducer";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    wishList: []
  });

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        wishList: state.wishList,
        cartDispatch: dispatch
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
