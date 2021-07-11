// import { data } from "../data";
import { useProduct } from "../Routes/Products/productContext";

export const useFilters = () => {
  const {
    showInventoryAll,
    showFastDeliveryOnly,
    sortBy,
    productData,
  } = useProduct();

  const getSortedData = (data, sortBy) => {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW")
      return data.sort((a, b) => b.price - a.price);

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH")
      return data.sort((a, b) => a.price - b.price);

    return data;
  };

  function getFilteredData(data, { showFastDeliveryOnly, showInventoryAll }) {
    return data
      .filter(({ fastDelivery }) =>
        showFastDeliveryOnly ? fastDelivery : true
      )
      .filter(({ inStock }) => (showInventoryAll ? true : inStock));
  }

// not functioning
  // const getSearchedData = ({ products }, searchString) => {
  //   return products.filter((item) =>
  //     item.name.toLowerCase().includes(searchString.toLowerCase())
  //   );
  // };
  // function searchedData(searchString) {
  //   getSearchedData(filteredData, searchString);
  // }
  // console.log(searchedData);

  const sortedData = getSortedData(productData, sortBy);
  const filteredData = getFilteredData(sortedData, {
    showFastDeliveryOnly,
    showInventoryAll,
  });

  return { filteredData };
};
