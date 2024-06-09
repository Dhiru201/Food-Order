import { useContext } from "react";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import CartContext from "../Store/CartContext.jsx";

export default function MealCard({ meal }) {
  const cartContext = useContext(CartContext);
  function handleAddItemToCart() {
    cartContext.addItem(meal);
  }
  const mealImage = "http://localhost:3000//" + meal.image;
  console.log(mealImage);
  return (
    <li className="meal-item">
      <article>
        <img src={mealImage} alt="logo" />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddItemToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
