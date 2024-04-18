"use client";

import React from "react";
import Meal from "./components/Meal/Meal";
import initialMealPlan from "./utils/initialMealPlan";

interface Meal {
  breakfast: string[];
  lunch: string[];
  dinner: string[];
}

interface DaySchedule {
  [day: string]: Meal;
}

export default function Home() {
  const [mealSchedule, setMealSchedule] =
    React.useState<DaySchedule>(initialMealPlan);

  async function updateIngredients(
    dayOfWeek: string,
    mealType: string,
    newIngredients: String[]
  ) {
    setMealSchedule((prevSchedule) => ({
      ...prevSchedule,
      [dayOfWeek]: {
        ...prevSchedule[dayOfWeek],
        [mealType]: newIngredients,
      },
    }));
  }
  console.log(mealSchedule);

  return (
    <main className="pb-20">
      <div className="container mx-auto">
        <h1 className="text-6xl">Meal Plan</h1>

        {Object.keys(mealSchedule).map((day) => (
          <div className="my-10" key={day}>
            <h2 className="text-4xl">{day}</h2>
            <Meal
              dayOfWeek={day}
              mealType="breakfast"
              ingredients={mealSchedule[day].breakfast}
              onUpdateIngredients={updateIngredients}
            />
            <Meal
              dayOfWeek={day}
              mealType="lunch"
              ingredients={mealSchedule[day].lunch}
              onUpdateIngredients={updateIngredients}
            />
            <Meal
              dayOfWeek={day}
              mealType="dinner"
              ingredients={mealSchedule[day].dinner}
              onUpdateIngredients={updateIngredients}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
