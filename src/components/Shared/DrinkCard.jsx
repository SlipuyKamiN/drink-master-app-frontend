import { Link } from 'react-router-dom';

import sass from './DrinkCard.module.scss';

const DrinkCard = ({ id, drink, drinkThumb }) => {
  return (
    <div className={sass.card}>
      <div className={sass.cardThumb}>
        <img
          srcSet={
            drinkThumb
              ? `${drinkThumb} 400w,
         ${drinkThumb} 220w,
         ${drinkThumb} 90w`
              : `
         ../../images/thumb-placeholder-large.png 400w,
         ../../images/thumb-placeholder-medium.png 220w,
         ../../images/thumb-placeholder-small.png 90w`
          }
          sizes="(min-width: 1440px) 400px, (min-width: 768px) 220px, (min-width: 375px) 90px, 100vw"
          src={drinkThumb || '../../images/thumb-placeholder-small.png'}
          alt={drink}
          loading="lazy"
        />
      </div>
      <div className={sass.cardInfo}>
        <p className={sass.cardName}>{drink}</p>
        <Link to={`/recipe/${id}`} className={sass.linkIngredients}>
          Ingredients
        </Link>
      </div>
    </div>
  );
};

export default DrinkCard;
