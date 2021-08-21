import { useEffect } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home, Cart, Products, WishList, NotFound, Login } from "./pages";
import { Navbar, Footer } from "./components"
import { PrivateRoute } from "./Context/PrivateRoute";
import { useCart } from "./Context/cartContext";
import { useAuth } from "./Context/authContext";
import { API_USERS } from "./urls";
import "./styles.css";


export default function App() {
  const { cart, wishList } = useCart();
  const { setUserData, userData, setUserLogin, isUserLogin, setUserToken,userToken } = useAuth();
  const navigate = useNavigate()
  console.log(userToken,"This is user token")

  useEffect(() => {
    if (isUserLogin) {
      (async function () {
        try {
          let tempToken = localStorage?.getItem("login");
          tempToken = tempToken && JSON.parse(tempToken);
          const { data } = await axios.post(
            `${API_USERS}/login`,
            {},
            { headers: { Authorization: tempToken?.token } }
          );
          setUserData(data.user);
          setUserLogin(true);
          setWishList(data.user.wishList);
          setCart(data.user.cart);
          setUserToken(tempToken?.token)
          console.log(data, "This is from app component");
        } catch (error) {
          console.log(error.message, "Error from app component");
        }
      })();
    }
  }, []);

  useEffect(()=>{
    if(userToken){
      navigate('/')
    }
  },[userToken])

  useEffect(() => {
    if (isUserLogin && cart.length > 0 && wishList.length > 0) {
      (async function () {
        try {
          console.log(wishList, cart, "in the  try");
          const data = await axios.post(
            `${ API_USERS }/${ userData._id }`,
            {
              data: {
                cart: cart,
                wishList: wishList,
              },
            }
          );
          console.log(data.user.cart, "From Cart try updater");
        } catch (error) {
          console.log(error.message, "Catch Error");
        }
      })();
    }
  }, [cart, wishList]);


  return (
    <div className="App">

      <Navbar />
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} /> */}
          <PrivateRoute path="/wishlist" element={<WishList />} />
          <PrivateRoute path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
