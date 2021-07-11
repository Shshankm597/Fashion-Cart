export const checkItem = (itemArray, id) => {
  return itemArray.find((item) => item._id === id);
};