import { useGetPopularListQuery} from "redux/recipesSlice";
import scss from './PopularRecipe.module.scss'

const PopularRecipe = () => {
  const {data, isSuccess} = useGetPopularListQuery('');

  console.log(data)
  return <div className={scss.popular}>
    <h2 className={scss.popular__title}>Popular recipe</h2>
  <ul className={scss.popular__list}>
{isSuccess && data.map(({_id, drinkThumb, drink, instructions})=> 
        <li key={_id} className={scss.popular__item}>
          <a href={`http://localhost:3000/drink-master-app-frontend/recipe/${_id}`}>
            <img src={drinkThumb} alt="coctail" className={scss.popular__img} width='90px' height='90px'/>
            <div className={scss.popular__wrapper}>
            <h3 className={scss.popular__name}>{drink}</h3>
            <p className={scss.popular__description}>{instructions}</p>
            </div>
          </a>
        </li>)}
  </ul>
  </div>
};

export default PopularRecipe;
