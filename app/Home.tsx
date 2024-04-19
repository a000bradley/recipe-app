"use client";

import React from "react";
import Meal from "./components/Meal/Meal";
import { Ingredient, DaySchedule } from "./types";
import { saveMealSchedule } from "./lib/mealSchedule";
import Day from "./components/Day/Day";
import Toggle from "./components/Toggle/Toggle";

interface HomeProps {
  initialMealSchedule: DaySchedule;
}

export default function Home({ initialMealSchedule }: HomeProps) {
  const [mealSchedule, setMealSchedule] =
    React.useState<DaySchedule>(initialMealSchedule);
  const [editView, setEditView] = React.useState(true);
  React.useEffect(() => {
    // Persist Change
    saveMealSchedule(mealSchedule);
  }, [mealSchedule]);

  async function updateIngredients(
    dayOfWeek: string,
    mealType: string,
    newIngredients: Ingredient[]
  ) {
    setMealSchedule((prevSchedule) => ({
      ...prevSchedule,
      [dayOfWeek]: {
        ...prevSchedule[dayOfWeek],
        [mealType]: newIngredients,
      },
    }));
  }

  function handleViewToggle() {
    setEditView(!editView);
  }

  return (
    <main className="py-20">
      <div className="container mx-auto px-5">
        <h1 className="text-4xl md:text-6xl mb-5 font-bold">Shopping List</h1>

        <div>
          <Toggle
            label={editView ? "Simplified View" : "Edit View"}
            onChange={handleViewToggle}
          />
        </div>
        <div>
          {Object.keys(mealSchedule).map((day) => (
            <Day
              key={day}
              day={day}
              mealSchedule={mealSchedule}
              onUpdateIngredients={updateIngredients}
              editView={editView}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
