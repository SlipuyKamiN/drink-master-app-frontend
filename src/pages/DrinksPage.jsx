import DrinksSearch from 'components/DrinksPage/DrinksSearch';
import DrinksList from 'components/DrinksPage/DrinksList';
import Container from 'components/Shared/Container';
import DrinkPageTitle from 'components/DrinksPage/DrinkPageTitle';
import { useSearchParams } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useSearchRecipesQuery } from '../redux/recipesSlice';
import { useParams } from 'react-router-dom';
import Paginator from 'components/FavoritePage/Paginator';
import ItemNotCocktails from 'components/FavoritePage/ItemNotCocktails';
import scss from './DrinksPage.module.scss';

const DrinksPage = () => {
  const { categoryName } = useParams();
  const [searchParams] = useSearchParams();
  const { width } = useWindowDimensions();
  const limit = width >= 1440 ? 9 : 10;
  const category = searchParams.get('category') || 'Cocktail';
  const page = searchParams.get('page') || 1;
  const ingredient = searchParams.get('ingredient') || '';
  const search = searchParams.get('search') || '';
  const { data, isError } = useSearchRecipesQuery(
    `?category=${category}&${
      ingredient && `ingredient=${ingredient}`
    }&limit=${limit}&page=${page}&${search && `search=${search}`}`
  );

  const pagesQty = Math.ceil(data?.totalHits / limit);

  return (
    <section className={scss.wrapper}>
      <Container>
        <DrinkPageTitle title="Drinks" />
        <DrinksSearch categoryName={categoryName} />
        {!isError ? (
          <>
            <DrinksList cocktails={data} />
            {pagesQty > 1 && <Paginator pagesQty={pagesQty} />}
          </>
        ) : (
          <ItemNotCocktails title={'No drinks were found'} />
        )}
      </Container>
    </section>
  );
};

export default DrinksPage;
