import { Ingredient } from "../../page";

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
      {ingredients.map((ingredient, index) => (
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
      ))}
    </ul>
  );
}

export default IngredientsList;
