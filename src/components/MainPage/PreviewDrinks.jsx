import { Link } from 'react-router-dom';

import DrinkCard from 'components/Shared/DrinkCard';

import sass from './PreviewDrinks.module.scss';

import { data } from './data.js';

const PreviewDrinks = () => {
  // const { category } = data;

  return (
    <section className={sass.drinks}>
      PreviewDrinks
      <ul className={sass.drinksList}>
        {data.map(({ _id: { $oid }, category }) => {
          return (
            <li key={$oid}>
              <Link to={`/drinks/${category}`} className={sass.drinksCategory}>
                {category}
                <ul className={sass.categorysList}>
                  {data.map(item => {
                    return <DrinkCard key={''} data={item} />;
                  })}
                </ul>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={sass.wrapper}>
        <Link to="/drinks" className={sass.drinksPage}>
          Other drinks
        </Link>
      </div>
    </section>
  );
};

export default PreviewDrinks;
