import { useState, useRef } from "react";
import Meals from "./components/Meals.jsx";
import Header from "./components/header.jsx";
import CartModal from "./components/CartModal.jsx";
import CheckoutModal from "./components/CheckoutModal.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import { CartContextProvider } from "./Store/CartContext.jsx";
import Checkout from "./components/CheckoutModal.jsx";

function App() {
  const modalRef = useRef();
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  function handleAddToCart(item) {
    setCartItems((previtems) => {
      return [item, ...previtems];
    });
  }

  function handleCartClickAction() {
    modalRef.current.open();
    console.log("cart clicked");
  }
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <CartModal />
        <CheckoutModal />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
