import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cart-reducer";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    wishList: []
  });

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
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
