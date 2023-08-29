import LoadingSpinner from 'components/Shared/LoadingSpinner';
import sass from './DrinksList.module.scss';

const DrinksList = ({ cocktails }) => {
  if (!cocktails) {
    return LoadingSpinner;
  }

  const drinks = cocktails.drinks;
  console.log(drinks);

  return (
    <div>
      <ul className={sass.list}>
        {drinks.map(item => {
          return (
            <li key={item._id.$oid}>
              <img src={item.drinkThumb} alt="" className={sass.photo} />
              <div className={sass.wrapper}>
                <p>{item.drink}</p>
                <a href="">Ingridients</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DrinksList;
