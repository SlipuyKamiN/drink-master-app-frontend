// import data from "../../DB/cocktails.json";
import RecipesItem from "./RecipesItem";
import css from "./RecipesList.module.scss";


const RecipesList = () => {
  // const { data } = useFetchAllQuery();
  // console.log(data);
  // const { removeFavoriteItem } = useDeleteFavoriteMutation();


  return <section className={css.ContainerRecipesList}>
    <ul className={css.RecipesList}>
    <RecipesItem />
    <RecipesItem />
    <RecipesItem />
  </ul>
  </section>
};

export default RecipesList;
