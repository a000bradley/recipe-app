import { getMealSchedule } from "./lib/mealSchedule";
import Home from "./Home";
import initialMealPlan from "./utils/initialMealPlan";

export default async function Page() {
  const mealSchedule = await getMealSchedule();

  return <Home initialMealSchedule={mealSchedule || initialMealPlan} />;
}
