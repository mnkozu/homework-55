import React, {useState} from 'react';
import Ingredients from "./components/Ingredients/Ingredients";
import Burger from "./components/Burger/Burger";
import './App.css';
import {Ingredient} from "./types";

import meatIMG from './assets/meat.png';
import cheeseIMG from './assets/cheese.png';
import saladIMG from './assets/salad.png';
import baconIMG from './assets/bacon.png';

const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 80, image: meatIMG},
  {name: 'Cheese', price: 50, image: cheeseIMG},
  {name: 'Salad', price: 10, image: saladIMG},
  {name: 'Bacon', price: 60, image: baconIMG}
];

const App = () => {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0}
  ]);

  const burgerComponents = () => {
    let inBurger: { name: string; key: number }[] = [];
    ingredients.forEach((ingredient,index)=> {
      for (let i = 0; i < ingredient.count; i++) {
        inBurger.push({name: ingredient.name, key: index});
      }
    });
    return inBurger;
  };

  const addIng = (index: number) => {
    setIngredients(prev => prev.map((ing, i) => {
      if (index === i) {
        return {
          ...ing,
          count: ing.count + 1
        };
      }

      return ing;
    }));
  };

  const delIng = (index: number) => {
    setIngredients(prev => prev.map((ing, i) => {
      if (index === i) {
        if (ing.count > 0) {
          return {
            ...ing,
            count: ing.count - 1
          };
        }
      }

      return ing;
    }));
  };

  const price = () => {
      let sum = 30;
      for (let i = 0; i < ingredients.length; i++) {
        const sumOfOne = INGREDIENTS[i].price * ingredients[i].count;
        sum += sumOfOne;
      }
      return sum;
  };

  return (
    <div className="App">
      <div className="BurgerBuilderHeader">
        <h1 className="BurgerBuilderTitle">Burger Builder</h1>
      </div>
      <div className="Container">
        <div className="MainBlock">
          <Ingredients
            INGREDIENTS={INGREDIENTS}
            ingredients={ingredients}
            onAdd={(index)=> addIng(index)}
            onDel={(index)=> delIng(index)}
          />
          <Burger
            ingredients={burgerComponents()}
            orderSum={price()}
          />
        </div>
      </div>
    </div>
  );
};

export default App;