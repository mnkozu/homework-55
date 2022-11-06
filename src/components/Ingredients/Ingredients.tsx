import React from 'react';
import {ingredients, INGREDIENTS} from "../../types";
import Ingredient from "../Ingredient/Ingredient";

interface IngredientsProps {
  INGREDIENTS: INGREDIENTS[],
  ingredients: ingredients[],
  onAdd: (index: number) => void,
  onDel: (index: number) => void,
}

const Ingredients: React.FC<IngredientsProps> = ({INGREDIENTS, ingredients, onAdd, onDel}) => {
  return (
    <div>
      {INGREDIENTS.map((INGREDIENT, index) => (
        <Ingredient
          key={index}
          id={index}
          name={INGREDIENT.name}
          image={INGREDIENT.image}
          count={ingredients[index].count}
          onAdd={() => onAdd(index)}
          onDel={() => onDel(index)}
        />
      ))}
    </div>
  );
};

export default Ingredients;