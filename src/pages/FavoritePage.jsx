import ItemNotCocktails from 'components/FavoritePage/ItemNotCocktails';
import Paginator from 'components/FavoritePage/Paginator';
import RecipesList from 'components/FavoritePage/RecipesList';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import { notification } from 'components/Shared/notification';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  useGetFavoritesQuery,
  useToggleFavoriteMutation,
} from 'redux/recipesSlice';


const FavoritePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading, isError } = useGetFavoritesQuery(
    `?page=${searchParams.get('page')}&limit=2`
  );
  const [toggleFavorite] = useToggleFavoriteMutation();
  const pagesQty = Math.ceil(data?.totalHits / 2);
  
  useEffect(() => {
    if (!searchParams.get('page')) {
      setSearchParams({ page: 1 });
      return;
    }
  }, [searchParams, setSearchParams]);

  if (isLoading) return <LoadingSpinner />;

  const removeFavorite = id => {
    toggleFavorite(id)
      .unwrap()
      .then(() => {
        if (pagesQty === 1) return;

        if (data.favorites.length === 1) {
          setSearchParams({ page: pagesQty - 1 });
        }
      });
  };

  console.log("data", data.totalHits);
  return (
    <>
      {data?.totalHits && !isError ? (
        <>
          <RecipesList data={data} removeFavorite={removeFavorite} />
          <Paginator pagesQty={pagesQty} />
        </>
      ) : <ItemNotCocktails />}
    </>
  )
};

export default FavoritePage;

      // {data?.totalHits && !isError && <RecipesList data={data} removeFavorite={removeFavorite} />}
      // {pagesQty > 1 && <Paginator pagesQty={pagesQty} />}
      // {!data.totalHits && <ItemNotCocktails />}
