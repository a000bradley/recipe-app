import Home from "./Home";
import { getMealSchedule } from "./lib/mealSchedule";
import initialMealPlan from "./utils/initialMealPlan";

export const revalidate = 0;

export default async function Page() {
  const mealSchedule = await getMealSchedule();

  return <Home initialMealSchedule={mealSchedule || initialMealPlan} />;
}
