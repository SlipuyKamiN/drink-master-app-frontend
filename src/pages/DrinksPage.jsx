import DrinksSearch from 'components/DrinksPage/DrinksSearch';
import DrinksList from 'components/DrinksPage/DrinksList';
import Container from 'components/Shared/Container';
import MainTitle from 'components/Shared/MainTitle';
import { useLocation, useSearchParams } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useCallback, useEffect, useState } from 'react';
import { useSearchRecipesQuery } from '../redux/recipesSlice';

const DrinksPage = ({ category }) => {
  const [query, setQuery] = useState('');
  const { data, isLoading, isError } = useSearchRecipesQuery(query, {
    // skip: !userData,
  });
  const { width } = useWindowDimensions();
  const [searchParams, setSearchParams] = useSearchParams({
    category: 'Cocktail',
    limit: 10,
  });
  const getSearchParams = useCallback(() => {
    return Object.fromEntries([...searchParams]);
  }, [searchParams]);
  const { search } = useLocation();

  useEffect(() => {
    setSearchParams({
      ...getSearchParams(),
      limit: width >= 1440 ? 9 : 10,
    });
  }, [setSearchParams, width, getSearchParams]);

  useEffect(() => {
    if (!category) {
      return;
    }

    setSearchParams({
      ...getSearchParams(),
      category: 'All categories' ? '' : category,
    });
  }, [setSearchParams, getSearchParams, category]);

  const handleFilterChange = filter => {
    setSearchParams({
      ...getSearchParams(),
      ...filter,
    });
  };

  useEffect(() => {
    // const { search, category, ingredient, limit } = getSearchParams();
    setQuery({
      ...getSearchParams(),
    });

    console.log(query);
    console.log(getSearchParams());
  }, [getSearchParams, search]);

  return (
    <Container>
      <MainTitle title="Drinks"></MainTitle>
      <DrinksSearch onFilterChange={handleFilterChange}></DrinksSearch>
      <DrinksList></DrinksList>
      {/* <div>DrinksPage</div> */}
    </Container>
  );
};

export default DrinksPage;
