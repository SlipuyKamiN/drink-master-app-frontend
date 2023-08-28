import RecipesItem from "./RecipesItem";
import css from "./RecipesList.module.scss";


const RecipesList = () => {
/*
отрумую зі стейту інформацію про коктейлі
прокидую пробсом необхідні для рендеру дані
*/

  return <section className={css.ContainerRecipesList}>
    <ul className={css.RecipesList}>
    <RecipesItem />
    <RecipesItem />
    <RecipesItem />
        <RecipesItem />
    <RecipesItem />
    <RecipesItem />

  </ul>
  </section>
};

export default RecipesList;
