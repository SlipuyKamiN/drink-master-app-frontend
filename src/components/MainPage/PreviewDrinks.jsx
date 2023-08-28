import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useGetMainPageRecipesQuery } from 'redux/recipesSlice';

import DrinkCard from 'components/Shared/DrinkCard';

import sass from './PreviewDrinks.module.scss';
import { useSigninMutation } from 'redux/authSlice';

const PreviewDrinks = () => {
  const { width } = useWindowDimensions();
  const [dispatch, { data: userData, isLoading: loginIn }] =
    useSigninMutation();
  const { data, isLoading, isError } = useGetMainPageRecipesQuery('');

  useEffect(() => {
    dispatch({ email: 'vik000777@gmail.com', password: '1234567Aa' });
  }, [dispatch]);

  console.log(width);
  console.log(userData, loginIn);
  console.log(data, isLoading, isError);

  return (
    <section className={sass.drinks}>
      PreviewDrinks
      {/* <ul className={sass.drinksList}>
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
      </ul> */}
      <div className={sass.wrapper}>
        <Link to="/drinks" className={sass.drinksPage}>
          Other drinks
        </Link>
      </div>
    </section>
  );
};

export default PreviewDrinks;
