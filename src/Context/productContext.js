import { createContext, useContext, useReducer, useState } from "react";
import { productReducer, initialState } from "../Reducer/productReducer";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [productData, setProductData] = useState([]);

  return (
    <ProductContext.Provider
      value={{
        showInventoryAll: state.showInventoryAll,
        showFastDeliveryOnly: state.showFastDeliveryOnly,
        sortBy: state.sortBy,
        productDispatch: dispatch,
        productData,
        setProductData
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}