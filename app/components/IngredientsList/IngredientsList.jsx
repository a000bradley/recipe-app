import React, { useState } from "react";

function IngredientsList({ ingredients }) {
  const [checkedIngredients, setCheckedIngredients] = useState(new Set());

  const handleIngredientChange = (ingredient) => {
    const newChecked = new Set(checkedIngredients);
    if (newChecked.has(ingredient)) {
      newChecked.delete(ingredient);
    } else {
      newChecked.add(ingredient);
    }
    setCheckedIngredients(newChecked);
  };

  return (
    <ul className="ingredients-list">
      {ingredients.map((ingredient, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={checkedIngredients.has(ingredient)} // Check the box if in the set
            onChange={() => handleIngredientChange(ingredient)}
          />
          <span
            style={{
              textDecoration: checkedIngredients.has(ingredient)
                ? "line-through"
                : "none",
            }}
            className="pl-2"
          >
            {ingredient}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default IngredientsList;
