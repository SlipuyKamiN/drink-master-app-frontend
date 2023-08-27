import { useFetchAllQuery, useDeleteFavoriteMutation } from '../../redux/favoritsSlice';
import data from "../../DB/cocktails.json";


const RecipesList = () => {
  const { data } = useFetchAllQuery();
  
  console.log(data);
  
  const { removeFavoriteItem } = useDeleteFavoriteMutation();

  return <ul>RecipesList</ul>;
};

export default RecipesList;
