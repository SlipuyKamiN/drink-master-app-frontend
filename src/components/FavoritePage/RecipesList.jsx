import RecipesItem from "./RecipesItem";
import css from "./RecipesList.module.scss";

const RecipesList = ({ data }) => {
  /*
  отрумую зі стейту інформацію про коктейлі
  прокидую пробсом необхідні для рендеру дані
  */
 
  const { favorites} = data;

  // console.log("favorites", favorites);
  
  return <section className={css.ContainerRecipesList}>
    <ul className={css.RecipesList}>
      {favorites.map(({ id, description, drink, drinkThumb }) => (
        <RecipesItem
          key={id}
          id={id}
          description={description}
          drink={drink}
          drinkThumb={drinkThumb}
        />
      ))}
    </ul>
  </section>
};

export default RecipesList;
