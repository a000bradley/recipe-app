"use client";

import React from "react";
import getIngredients from "./lib/getIngredients";

export default function Home() {
  const [getValue, setValue] = React.useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  async function handleButtonClick() {
    const ans = await getIngredients(getValue);

    console.log("Monday = ", ans);
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
        <div>// Recipes go heere {getValue}</div>

        <div className="fixed bottom-0 left-0 w-full bg-gray-100 p-4 flex justify-around items-center">
          Test
        </div>
      </div>
    </main>
  );
}
