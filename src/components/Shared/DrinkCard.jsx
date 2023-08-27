import { Link } from 'react-router-dom';

import sass from './DrinkCard.module.scss';

const DrinkCard = ({ data }) => {
  const {
    _id: { $oid },
    drinkThumb,
    drink,
  } = data;

  return (
    <div className={sass.card}>
      <div className={sass.cardThumb}>
        <img src={`${drinkThumb}`} alt={drink} />
      </div>
      <div className={sass.cardInfo}>
        <p className={sass.cardName}>{drink}</p>
        <Link to={`/recipe/${$oid}`} className={sass.linkIngredients}>
          Ingredients
        </Link>
      </div>
    </div>
  );
};

export default DrinkCard;
