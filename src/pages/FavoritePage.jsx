import { useGetFavoritesQuery } from "redux/recipesSlice";
import Paginator from "components/FavoritePage/Paginator";
import RecipesList from "components/FavoritePage/RecipesList";
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import { useState } from "react";

const FavoritePage = () => {

  const [currentPage, setCurrentPage] = useState(1);
  
  const { data, isLoading, isError } =
    useGetFavoritesQuery(`?page=${currentPage}&limit=3`);
  

  return <>
    
    {isLoading && <LoadingSpinner size={150} />}
    {isError && <div>Ooooopsss!!!!</div>}
    {data && <RecipesList data={data} />}
    {data !== undefined && data.totalHits > 2 && data.totalHits !== undefined && <Paginator
      totalHits={data.totalHits}
      setCurrentPage={setCurrentPage}
    />}
    
  </>
};

export default FavoritePage;





// import { useSigninMutation } from "redux/authSlice";
// import { useEffect } from "react";

  // const [dispatch, { data: userData,  }] = useSigninMutation();
  // useEffect(() => {
  //   dispatch({ email: "Stas@mail.com", password: "Ss123456" });
  // }, [dispatch]);