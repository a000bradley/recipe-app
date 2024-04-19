export interface Ingredient {
  name: string;
  checked: boolean;
}

export interface Meal {
  breakfast: Ingredient[];
  lunch: Ingredient[];
  dinner: Ingredient[];
}

export interface DaySchedule {
  [day: string]: Meal;
}
