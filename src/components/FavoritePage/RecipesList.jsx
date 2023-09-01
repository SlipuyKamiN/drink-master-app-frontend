import RecipesItem from './RecipesItem';
import css from './RecipesList.module.scss';

const RecipesList = ({ data, removeFavorite }) => {
 

  const { favorites } = data;

  return (
    <section className={css.ContainerRecipesList}>
      <ul className={css.RecipesList}>
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
    </section>
  );
};

export default RecipesList;
