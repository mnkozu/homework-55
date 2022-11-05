import React, {useState} from 'react';
import Ingredients from "./components/Ingredients/Ingredients";
import Burger from "./components/Burger/Burger";
import './App.css';

import meatIMG from './assets/meat.png';
import cheeseIMG from './assets/cheese.png';
import saladIMG from './assets/salad.png';
import baconIMG from './assets/bacon.png';

const INGREDIENTS = [
  {name: 'Meat', price: 50, image: meatIMG},
  {name: 'Cheese', price: 20, image: cheeseIMG},
  {name: 'Salad', price: 5, image: saladIMG},
  {name: 'Bacon', price: 30, image: baconIMG}
];

const App = () => {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0}
  ]);

  return (
    <div className="App">
      <div className="BurgerBuilderHeader">
        <h1 className="BurgerBuilderTitle">Burger Builder</h1>
      </div>
      <div className="Container">
        <div className="MainBlock">
          <Ingredients/>
          <Burger/>
        </div>
      </div>
    </div>
  );
};

export default App;