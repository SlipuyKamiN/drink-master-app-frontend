import DrinkCard from '../../components/Shared/DrinkCard';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import sass from './DrinksList.module.scss';

const DrinksList = ({ cocktails }) => {
  if (!cocktails) {
    return <LoadingSpinner />;
  }

  const drinks = cocktails.drinks;
  // console.log(drinks);

  return (
    <div>
      <ul className={sass.list}>
        {drinks.map(item => {
          return (
            <DrinkCard
              key={item._id}
              id={item._id.$oid}
              drink={item.drink}
              drinkThumb={item.drinkThumb}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default DrinksList;

// <li key={item._id.$oid}>
//   <img src={item.drinkThumb} alt="" className={sass.photo} />
//   <div className={sass.wrapper}>
//     <p>{item.drink}</p>
//     <a href="">Ingridients</a>
//   </div>
// </li>
