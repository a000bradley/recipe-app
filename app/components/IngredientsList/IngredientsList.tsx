import { Ingredient } from "@/app/types";

interface IngredientsListProps {
  ingredients: Ingredient[];
  onIngredientChecked: (ingredient: Ingredient) => void;
}

function IngredientsList({
  ingredients,
  onIngredientChecked,
}: IngredientsListProps) {
  return (
    <ul className="ingredients-list">
      {ingredients.map((ingredient, index) => {
        // Meal Name
        if (index === 0) {
          return <h3 key={index}>{ingredient.name}</h3>;
        }
        return (
          <li key={index}>
            <input
              type="checkbox"
              checked={ingredient.checked}
              onChange={(e) => onIngredientChecked(ingredient)}
            />
            <span
              style={{
                textDecoration: ingredient.checked ? "line-through" : "none",
              }}
              className="pl-2"
            >
              {ingredient.name}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default IngredientsList;
