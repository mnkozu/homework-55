import React from 'react';
import './Ingredient.css';

interface IngredientProps extends React.PropsWithChildren {
  name: string,
  image: string,
  count: number,
  id: number,
  onAdd: () => void,
  onDel: () => void,
}

const Ingredient: React.FC<IngredientProps> = ({name, image, count, id, onAdd, onDel}) => {
  return (
    <div className="EveryIngBlock" key={id}>
        <img
          src={image}
          alt={name}
          className="IngIMG"
          onClick={onAdd}
        />
        <div className="IngName" onClick={onAdd}>{name}</div>
        <div className="IngName">x{count}</div>
      <button className="IngDeleteButton" onClick={onDel}>Delete</button>
    </div>
  );
};

export default Ingredient;