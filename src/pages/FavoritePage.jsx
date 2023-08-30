import { useGetFavoritesQuery } from "redux/recipesSlice";
import { useSigninMutation } from "redux/authSlice";
import { useEffect } from "react";
import Paginator from "components/FavoritePage/Paginator";
import RecipesList from "components/FavoritePage/RecipesList";
import LoadingSpinner from 'components/Shared/LoadingSpinner';


const FavoritePage = () => {

  const [dispatch, { data: userData,  }] = useSigninMutation();
  const { data, isLoading, isError } = useGetFavoritesQuery(`?page=1&limit=8`, { skip: !userData });
  

  useEffect(() => {
    dispatch({ email: "Stas@mail.com", password: "Ss123456" });
  }, [dispatch]);
  
  return (
    <>
      {isLoading && <LoadingSpinner size={150} />}
      {isError && <div>Ooooopsss!!!!</div>}
      {data && <RecipesList data={data} />}
      {data !== undefined && data.totalHits > 2 && data.totalHits !== undefined && <Paginator
        totalHits={data.totalHits}
      />}
    </>
  );
};

export default FavoritePage;
