import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useGetMainPageRecipesQuery } from 'redux/recipesSlice';

import LoadingSpinner from 'components/Shared/LoadingSpinner';
import DrinkCard from 'components/Shared/DrinkCard';

import sass from './PreviewDrinks.module.scss';

const PreviewDrinks = () => {
  const [amountDrinks, setAmountDrinks] = useState(0);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 768) {
      setAmountDrinks(1);
      return;
    }
    if (width >= 1440) {
      setAmountDrinks(3);
      return;
    }
    setAmountDrinks(2);
  }, [width]);

  const { data, isLoading, isError } = useGetMainPageRecipesQuery('');

  if (!data || isLoading) {
    return <LoadingSpinner size={60} />;
  }

  if (isError) {
    return toast.error(`${isError}`);
  }

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <section className={sass.drinks}>
        <ul className={sass.drinksList}>
          {data.map(({ category, drinks, _id }) => {
            return (
              <li key={`${category}${_id}`}>
                <Link
                  to={`/drinks/${category}`}
                  className={sass.drinksCategory}
                >
                  {category}
                </Link>
                <ul className={sass.categoryList}>
                  {drinks
                    .slice(0, amountDrinks)
                    .map(({ _id, drink, drinkThumb }) => {
                      return (
                        <li>
                          <DrinkCard
                            key={_id}
                            id={_id}
                            drink={drink}
                            drinkThumb={drinkThumb}
                          />
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
        </ul>
        <div className={sass.wrapper}>
          <Link to="/drinks/All categories" className={sass.drinksPage}>
            Other drinks
          </Link>
        </div>
      </section>
    </>
  );
};

export default PreviewDrinks;
