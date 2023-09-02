import RecipesItem from './RecipesItem';
import scss from './RecipesList.module.scss';

const RecipesList = ({ data, removeFavorite }) => {
 

  const { favorites } = data;

  return <ul className={scss.recipesList}>
        {favorites.map(({ _id, description, drink, drinkThumb }) => (
          <RecipesItem
            key={_id}
            id={_id}
            description={description}
            drink={drink}
            drinkThumb={drinkThumb}
            removeFavorite={removeFavorite}
          />
        ))}
      </ul>
};

export default RecipesList;
