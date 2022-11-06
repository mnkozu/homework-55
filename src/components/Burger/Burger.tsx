import React from 'react';
import './Burger.css';

interface PersonProps extends React.PropsWithChildren {
  ingredients: {name: string, key: number}[];
}

const Burger: React.FC<PersonProps> = props => {
 return (
  <div>
    <h1>Burger</h1>
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
        {props.ingredients.map((ing, id) => {
          return (
            <div key={id} className={ing.name}></div>
          );
        })}
      <div className="BreadBottom"></div>
    </div>
    <div>Price:</div>
    </div>
   );
};

export default Burger;