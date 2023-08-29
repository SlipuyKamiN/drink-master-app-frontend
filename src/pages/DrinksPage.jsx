import DrinksSearch from 'components/DrinksPage/DrinksSearch';
import DrinksList from 'components/DrinksPage/DrinksList';
import Container from 'components/Shared/Container';
import MainTitle from 'components/Shared/MainTitle';
import { useLocation, useSearchParams } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useCallback, useEffect, useState } from 'react';
import { useSearchRecipesQuery } from '../redux/recipesSlice';
import { useSigninMutation } from 'redux/authSlice';
import { notification } from 'components/Shared/notification';
import LoadingSpinner from 'components/Shared/LoadingSpinner';

const DrinksPage = ({ category }) => {
  const [dispatch, { data: userData }] = useSigninMutation();
  const [query, setQuery] = useState('');
  const { data, isLoading, isError } = useSearchRecipesQuery(query, {
    skip: !userData,
  });
  const { width } = useWindowDimensions();
  const [searchParams, setSearchParams] = useSearchParams({
    category: category || 'Cocktail',
    limit: 10,
    page: 1,
  });
  const getSearchParams = useCallback(() => {
    return Object.fromEntries([...searchParams]);
  }, [searchParams]);
  const { search } = useLocation();

  useEffect(() => {
    dispatch({
      password: 'AA223355aa',
      email: 'Jacky@mail.com',
    });
  }, [dispatch]);

  console.log(userData);
  console.log(data);

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

    console.log(getSearchParams());
  }, [getSearchParams, search]);

  if (isError) {
    notification('No drinks were found');
  }

  return (
    <Container>
      <MainTitle title="Drinks"></MainTitle>
      <DrinksSearch onFilterChange={handleFilterChange}></DrinksSearch>
      {isLoading && LoadingSpinner}
      <DrinksList cocktails={data}></DrinksList>
    </Container>
  );
};

export default DrinksPage;
