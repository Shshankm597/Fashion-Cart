import { useaxios } from "axios";
import { useCart } from "../../Context/cartContext";
import { checkItem } from "../utils";
import { API_CART, API_WISHLIST } from "../../urls";
import { useAuth } from "../../Context/authContext";
import { useNavigate } from "react-router";

export const WishlistButton = ({ calledFrom, id, name, ...rest }) => {
  const { wishlist, cartDispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();

  const {
    isLoading,
    postData: postWishlistData,
    deleteData: deleteWishlistData,
  } = useAxios(API_WISHLIST);
  const { deleteData: deleteCartData } = useAxios(API_CART);

  const handleClick = async () => {
    console.clear();
    console.log(token);
    if (!token) {
      navigate("/login");
    } else {
      if (checkItem(wishlist, id)) {
        const deleteSuccess = await deleteWishlistData({ id, name });
        if (deleteSuccess) {
          cartDispatch({ type: REMOVE_WISHLIST_ITEM, id });
        }
      } else {
        const item = await postWishlistData({ id, name, ...rest });
        cartDispatch({ type: ADD_WISHLIST_ITEM, item });
        if (calledFrom === "cart") {
          const success = await deleteCartData({ id, name }, false);
          if (success) {
            cartDispatch({ type: REMOVE_CART_ITEM, id: item.id });
          }
        }
      }
    }
  };
  return (
    <button
      disabled={isLoading}
      className={`btn-close btn-wishlist btn-lg 
      ${checkItem(wishlist, id) ? "font--warning" : "font--grey-500"}`}
      onClick={handleClick}
    >
      {isLoading ? (
        <i className="fa fa-spinner fa-pulse" />
      ) : (
        <i className="fa fa-heart" />
      )}
    </button>
  );
};
