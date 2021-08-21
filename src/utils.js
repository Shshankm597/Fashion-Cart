export const checkItem = (itemArray, id) => {
  console.log(itemArray, "from check Item array"), id, "id hai ye"
  return itemArray.find((item) => item._id === id);
};