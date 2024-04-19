import React from "react";
import Meal from "../Meal/Meal";
import { DaySchedule, Ingredient } from "@/app/types";

interface DayProps {
  day: string;
  mealSchedule: DaySchedule;
  onUpdateIngredients: (
    dayOfWeek: string,
    mealType: string,
    newIngredients: Ingredient[]
  ) => void;
  editView: Boolean;
}

const Day = ({
  day,
  mealSchedule,
  onUpdateIngredients,
  editView,
}: DayProps) => {
  if (
    !editView &&
    mealSchedule[day].breakfast.length === 0 &&
    mealSchedule[day].lunch.length === 0 &&
    mealSchedule[day].dinner.length === 0
  ) {
    return;
  }

  return (
    <div className="my-10 border-b-2 pb-5" key={day}>
      <h2 className="text-4xl font-bold pb-4">{day}</h2>
      <Meal
        dayOfWeek={day}
        mealType="breakfast"
        ingredients={mealSchedule[day].breakfast}
        onUpdateIngredients={onUpdateIngredients}
        editView={editView}
      />
      <Meal
        dayOfWeek={day}
        mealType="lunch"
        ingredients={mealSchedule[day].lunch}
        onUpdateIngredients={onUpdateIngredients}
        editView={editView}
      />
      <Meal
        dayOfWeek={day}
        mealType="dinner"
        ingredients={mealSchedule[day].dinner}
        onUpdateIngredients={onUpdateIngredients}
        editView={editView}
      />
    </div>
  );
};

export default Day;
