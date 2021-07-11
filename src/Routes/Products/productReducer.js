export const initialState = {
    showInventoryAll: true,
    showFastDeliveryOnly: false,
    sortBy: null
}

export function productReducer(state, action) {
    switch (action.type) {
      case "TOGGLE_INVENTORY":
        return (state = {
          ...state,
          showInventoryAll: !state.showInventoryAll
        });
      case "TOGGLE_DELIVERY":
        return (state = {
          ...state,
          showFastDeliveryOnly: !state.showFastDeliveryOnly
        });
      case "SORT_BY_PRICE":
        return {
          ...state,
          sortBy: action.payload
        };
      default:
        return state;
    }
  }