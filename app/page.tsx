"use client";

import React from "react";
import getIngredients from "./lib/getIngredients";
import IngredientsList from "./components/IngredientsList/IngredientsList";

export default function Home() {
  const [searchTerm, setsearchTerm] = React.useState("");
  const [ingredients, setIngredients] = React.useState({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  });
  // const [ingredients, setIngredients] = React.useState([]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setsearchTerm(e.target.value);
  }

  async function handleButtonClick(dayOfWeek) {
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
