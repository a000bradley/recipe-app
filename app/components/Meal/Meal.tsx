import React from "react";
import IngredientsList from "../IngredientsList/IngredientsList";
import getIngredients from "@/app/lib/getIngredients";
import { Ingredient } from "@/app/types";
import "./Meal.css";

interface MealProps {
  dayOfWeek: string;
  mealType: "breakfast" | "lunch" | "dinner";
  ingredients: Ingredient[];
  editView: Boolean;
  onUpdateIngredients: (
    dayOfWeek: string,
    mealType: string,
    newIngredients: Ingredient[]
  ) => void;
}

function Meal({
  dayOfWeek,
  mealType,
  ingredients,
  editView,
  onUpdateIngredients,
}: MealProps) {
  const [searchTerm, setsearchTerm] = React.useState("");

  async function findIngredients() {
    if (!searchTerm) {
      alert("Enter a Meal Name");
      return;
    }
    const response = (await getIngredients(searchTerm)) || "";
    const ingredientArray = response.split(", ").map((ingredient) => {
      return {
        name: ingredient,
        checked: false,
      };
    });
    onUpdateIngredients(dayOfWeek, mealType, ingredientArray);
  }

  function handleIngredientChecked(checkedIngredient: Ingredient) {
    const newIngredientsArray = ingredients.map((ingredient) => {
      if (ingredient.name === checkedIngredient.name) {
        return { name: ingredient.name, checked: !ingredient.checked };
      }
      return ingredient;
    });
    onUpdateIngredients(dayOfWeek, mealType, newIngredientsArray);
  }

  function handleClear() {
    setsearchTerm("");
    onUpdateIngredients(dayOfWeek, mealType, []);
  }

  if (!editView && ingredients.length === 0) {
    return;
  }
  return (
    <div className="md:flex mb-4">
      <h2 className="text-2xl meal-title font-bold">{mealType} </h2>
      <div className="md:pl-2">
        <IngredientsList
          ingredients={ingredients}
          onIngredientChecked={handleIngredientChecked}
        />

        {editView && (
          <>
            {!ingredients.length ? (
              <>
                <input
                  placeholder="Search Meal Name"
                  value={searchTerm}
                  className="align-super border-b-2"
                  onChange={(e) => setsearchTerm(e.target.value)}
                />
                <button
                  onClick={findIngredients}
                  className="bg-slate-100 px-2 rounded-full ml-4"
                >
                  Search
                </button>
              </>
            ) : (
              <button
                className="bg-slate-100 px-2 rounded-full mt-2"
                onClick={handleClear}
              >
                Clear
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Meal;
