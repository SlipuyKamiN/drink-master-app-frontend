// import RecipesItem from "components/FavoritePage/RecipesItem";
import Paginator from "components/FavoritePage/Paginator";
import RecipesList from "components/FavoritePage/RecipesList";

const FavoritePage = () => {
  /* викликаю фетч запит
    отримую кількість рецептів
    в залежності від них рендерю пагінацію та список
  */

  
  return <>
    <div>FavoritePage</div>
    <RecipesList />
    <Paginator/>
  </>;
};

export default FavoritePage;
