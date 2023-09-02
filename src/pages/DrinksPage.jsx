import DrinksSearch from 'components/DrinksPage/DrinksSearch';
import DrinksList from 'components/DrinksPage/DrinksList';
import Container from 'components/Shared/Container';
import DrinkPageTitle from 'components/DrinksPage/DrinkPageTitle';
import { useSearchParams } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useCallback, useEffect, useState } from 'react';
import { useSearchRecipesQuery } from '../redux/recipesSlice';
import { useParams } from 'react-router-dom';
import { useGetCategoriesListQuery } from '../redux/recipesSlice';
import Paginator from 'components/FavoritePage/Paginator';
import ItemNotCocktails from 'components/FavoritePage/ItemNotCocktails';

const DrinksPage = () => {
  const { categoryName: category } = useParams();
  const { data: categoryList } = useGetCategoriesListQuery();
  const [query, setQuery] = useState('');
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { data, isError } = useSearchRecipesQuery(query);
  const { width } = useWindowDimensions();
  const [searchParams, setSearchParams] = useSearchParams({
    category:
      !category.replace('_', '/') || ''
        ? 'Cocktail'
        : category.replace('_', '/'),
    limit: 10,
    page: 1,
  });
  const getSearchParams = useCallback(() => {
    return Object.fromEntries([...searchParams]);
  }, [searchParams]);

  useEffect(() => {
    if (categoryList && isFirstRender) {
      if (!categoryList.includes(category)) {
        setSearchParams({
          ...getSearchParams(),
          category: 'Cocktail',
        });
        setIsFirstRender(false);
      }
    }
  }, [categoryList, isFirstRender, category, setSearchParams, getSearchParams]);

  useEffect(() => {
    setSearchParams({
      ...getSearchParams(),
      limit: width >= 1440 ? 9 : 10,
    });
  }, [setSearchParams, width, getSearchParams]);

  if (category === 'All categories') {
    setSearchParams({
      ...getSearchParams(),
      category: '',
    });
  }

  const handleFilterChange = useCallback(
    filter => {
      setSearchParams({
        ...getSearchParams(),
        ...filter,
      });
    },
    [getSearchParams, setSearchParams]
  );

  useEffect(() => {
    const {
      search = '',
      category,
      ingredient = '',
      limit,
      page,
    } = getSearchParams();
    setQuery(
      `?search=${search}&category=${category}&ingredient=${ingredient}&limit=${limit}&page=${page}`
    );
  }, [getSearchParams]);

  const pagesQty = Math.ceil(data?.totalHits / searchParams.get('limit'));

  return (
    <Container>
      <DrinkPageTitle title="Drinks" />
      <DrinksSearch onFilterChange={handleFilterChange} />
      {!isError ? (
        <>
          <DrinksList cocktails={data} />
          <Paginator pagesQty={pagesQty} params={{ ...getSearchParams() }} />
        </>
      ) : (
        <ItemNotCocktails title={'No drinks were found'} />
      )}
    </Container>
  );
};

export default DrinksPage;
