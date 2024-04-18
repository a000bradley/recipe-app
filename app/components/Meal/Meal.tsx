import React from "react";
import IngredientsList from "../IngredientsList/IngredientsList";
import getIngredients from "@/app/lib/getIngredients";

interface MealProps {
  dayOfWeek: string;
  mealType: "breakfast" | "lunch" | "dinner";
  ingredients: string[];
  onUpdateIngredients: (
    dayOfWeek: string,
    mealType: string,
    newIngredients: string[]
  ) => void;
}

function Meal({
  dayOfWeek,
  mealType,
  ingredients,
  onUpdateIngredients,
}: MealProps) {
  const [searchTerm, setsearchTerm] = React.useState("");

  async function findIngredients() {
    const response = await getIngredients(searchTerm);
    const ingredientArray = response.split(", ");
    onUpdateIngredients(dayOfWeek, mealType, ingredientArray);
  }

  return (
    <div>
      <h2 className="text-2xl">{mealType} </h2>
      <input
        className="border-2"
        placeholder="Meals Name"
        onChange={(e) => setsearchTerm(e.target.value)}
      />
      <button
        onClick={findIngredients}
        className="rounded-full p-2 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
      >
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <IngredientsList ingredients={ingredients} />
    </div>
  );
}

export default Meal;
