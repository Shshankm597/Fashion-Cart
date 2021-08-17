import { useProduct } from "../../Context/productContext";

export const FilterUI = () => {
    const { showInventoryAll, showFastDeliveryOnly, sortBy, productDispatch } = useProduct();

    return (
        <div className="filter-area">
        <fieldset
          className="col"
          style={{
            width: "fit-content",
            alignItems: "center",
            padding: "1rem"
          }}
        >
          <legend> Sort by </legend>
          <label>
            <input
              type="radio"
              name="sortByPrice"
              onChange={() =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "PRICE_HIGH_TO_LOW"
                })
              }
              checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
            />
            Price - High to Low
          </label>
          <label>
            <input
              type="radio"
              name="sortByPrice"
              onChange={() =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "PRICE_LOW_TO_HIGH"
                })
              }
              checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
            />
            Price - Low to High
          </label>
        </fieldset>
        <fieldset
          className="col"
          style={{
            marginTop: "1.5rem",
            width: "fit-content",
            alignItems: "flex-start",
            padding: "1rem"
          }}
        >
          <legend> Filters </legend>
          <label>
            <input
              type="checkbox"
              checked={showInventoryAll}
              onChange={() => productDispatch({ type: "TOGGLE_INVENTORY" })}
            />
            Include Out Of Stock
          </label>
          <label>
            <input
              type="checkbox"
              checked={showFastDeliveryOnly}
              onChange={() => productDispatch({ type: "TOGGLE_DELIVERY" })}
            />
            Fast Delivery Only
          </label>
        </fieldset>
        </div>

    )
}