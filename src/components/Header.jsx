import { useContext } from "react";
import headerImage from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import CartContext from "../Store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
  const cartContext = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCount = cartContext.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={headerImage} alt="food-order" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCount})
        </Button>
      </nav>
    </header>
  );
}
