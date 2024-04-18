"use client";

import React from "react";
import getIngredients from "./lib/getIngredients";
import IngredientsList from "./components/IngredientsList/IngredientsList";

interface IngredientsState {
  [key: string]: string[];
}

interface IngredientsState {
  monday: string[];
  tuesday: string[];
  wednesday: string[];
  thursday: string[];
  friday: string[];
}

export default function Home() {
  const [searchTerm, setsearchTerm] = React.useState("");
  const [ingredients, setIngredients] = React.useState<IngredientsState>({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  });

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setsearchTerm(e.target.value);
  }

  async function handleButtonClick(dayOfWeek: string) {
    const response = await getIngredients(searchTerm);

    const ingredientArray = response.split(", ");

    setIngredients((prevIngredients) => ({
      ...prevIngredients,
      [dayOfWeek]: ingredientArray,
    }));

    console.log(ingredients);
  }

  return (
    <main>
      <div className="container mx-auto">
        <h1>Next Weeks ingredietns</h1>

        {Object.keys(ingredients).map((day) => (
          <div key={day}>
            <h2 className="text-5xl">{day}</h2>
            <input
              className="border-2"
              placeholder="What are we having?"
              name={day}
              onChange={(e) => onChange(e)}
            ></input>
            <button onClick={() => handleButtonClick(day)}>Search?</button>
            {/* ... your input */}
            <IngredientsList ingredients={ingredients[day]} />
          </div>
        ))}

        <div className="fixed bottom-0 left-0 w-full bg-gray-100 p-4 flex justify-around items-center">
          Test
        </div>
      </div>
    </main>
  );
}
