"use client";

import React from "react";
import getIngredients from "./lib/getIngredients";

export default function Home() {
  const [searchTerm, setsearchTerm] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setsearchTerm(e.target.value);
  }

  async function handleButtonClick() {
    const response = await getIngredients(searchTerm);

    const ingredientArray = response.split(", ");
    console.log(ingredientArray);

    setIngredients(ingredientArray);
  }

  return (
    <main>
      <div className="container mx-auto">
        <h1>Recipes App</h1>

        <h2 className="text-5xl">Monday</h2>
        <input
          className="border-2"
          placeholder="What are we having?"
          name="monday"
          onChange={(e) => onChange(e)}
        ></input>
        <button onClick={() => handleButtonClick()}>Search?</button>
        <div>
          {ingredients.map((ingredient) => {
            return (
              <div className="my-1">
                {" "}
                <input type="checkbox" />
                {ingredient}
              </div>
            );
          })}
        </div>

        <div className="fixed bottom-0 left-0 w-full bg-gray-100 p-4 flex justify-around items-center">
          Test
        </div>
      </div>
    </main>
  );
}
