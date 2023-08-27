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
        {/* <img src={`${drinkThumb}`} alt={drink} /> */}
        <picture>
          <source
            media="(min-width: 1440px)"
            srcset={
              drinkThumb
                ? `${drinkThumb}`
                : '../../images/thumb-placeholder-large.png'
            }
            type="image/png"
          />

          <source
            media="(min-width: 768px)"
            srcset={
              drinkThumb
                ? `${drinkThumb}`
                : '../../images/thumb-placeholder-medium.png'
            }
            type="image/png"
          />

          <source
            media="(max-width: 767.99px)"
            srcset={
              drinkThumb
                ? `${drinkThumb}`
                : '../../images/thumb-placeholder-small.png'
            }
            type="image/png"
          />

          <img
            src={
              drinkThumb
                ? `${drinkThumb}`
                : '../../images/thumb-placeholder-small.png'
            }
            alt={drink}
            loading="lazy"
          />
        </picture>
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
