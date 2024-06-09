import { useEffect, useState } from "react";
import MealCard from "./MealCard.jsx";
import useHttp from "./customHooks/useHttp.js";
import Error from "./Error.jsx";
const requestConfig = {};
export default function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {meals.map((meal) => {
        return <MealCard key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}
