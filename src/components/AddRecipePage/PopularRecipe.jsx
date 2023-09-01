import { useGetPopularListQuery} from "redux/recipesSlice";
import scss from './PopularRecipe.module.scss'
// import LoadingSpinner from "components/Shared/LoadingSpinner";
import { LiaCocktailSolid } from 'react-icons/lia';

const PopularRecipe = () => {
  const {data, isSuccess} = useGetPopularListQuery('');
  const checkLengthBookTitle = (title, length) => {
    if (title.length > length) {
      return `${title.slice(0, length)}...`;
    }
  
    return title;
  };
  return <div className={scss.popular}>
    <h2 className={scss.popular__title}>Popular recipe</h2>
  <ul className={scss.popular__list}>
{isSuccess && data.map(({_id, drinkThumb, drink, instructions})=> 
        <li key={_id} className={scss.popular__item}>
          <a href={`http://localhost:3000/drink-master-app-frontend/recipe/${_id}`} className={scss.popular__link}>
            <div className={scss.popular__thumb}>
            <img src={drinkThumb} alt="coctail" className={scss.popular__img} width='90px' />
            <div className={scss.popular__wrapper}>
            <h3 className={scss.popular__name}>{drink}</h3>
            <p className={scss.popular__description}>{checkLengthBookTitle(instructions, 88)}</p>
            </div>
            </div>
          </a>
        </li>)}
  </ul>
  {isSuccess && data.length === 0 &&
  <div className={scss.spinner}>
    <LiaCocktailSolid size='70px' color='white'/>
    <p className={scss.text}>The list of popular recipes is currently empty
</p>
    </div>}
  </div>
};

export default PopularRecipe;
