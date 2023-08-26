import cocktails from './cocktails.json';
import sass from './DrinksList.module.scss';

const DrinksList = () => {
  return (
    <div>
      <ul className={sass.list}>
        {cocktails.map(item => {
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
