import DrinkCard from '../../components/Shared/DrinkCard';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import sass from './DrinksList.module.scss';

const DrinksList = ({ cocktails }) => {
  if (!cocktails) {
    return <LoadingSpinner />;
  }

  const drinks = cocktails.drinks;

  return (
    <ul className={sass.list}>
      {drinks.map(item => {
        return (
          <DrinkCard
            key={item._id}
            id={item._id}
            drink={item.drink}
            drinkThumb={item.drinkThumb}
          />
        );
      })}
    </ul>
  );
};

export default DrinksList;