import DrinksSearch from 'components/DrinksPage/DrinksSearch';
import DrinksList from 'components/DrinksPage/DrinksList';
import Container from 'components/Shared/Container';
import MainTitle from 'components/Shared/MainTitle';
import { useLocation, useSearchParams } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useCallback, useEffect, useState } from 'react';
import { useSearchRecipesQuery } from '../redux/recipesSlice';
// import { useGetCategoriesListQuery } from '../redux/recipesSlice';
import { useParams } from 'react-router-dom';
// import { useSigninMutation } from 'redux/authSlice';
import { notification } from 'components/Shared/notification';
// import LoadingSpinner from 'components/Shared/LoadingSpinner';

const DrinksPage = () => {
  const { categoryName: category } = useParams();
  // console.log(category);

  const [query, setQuery] = useState('');
  const { data, isError } = useSearchRecipesQuery(query);
  // const { data: categoryList } = useGetCategoriesListQuery();
  // console.log(categoryList);
  // const [categoryList, setCategoryList] = useState(null);
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

  // useEffect(() => {
  // const categoriesList = useGetCategoriesListQuery();
  //   console.log(categoryList);
  // }, [categoryList]);

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

  // useEffect(() => {
  //   if (!categoryList?.includes(category)) {
  //     setSearchParams({
  //       ...getSearchParams(),
  //       category: 'Cocktail',
  //     });
  //   }
  // }, [category, categoryList, getSearchParams, setSearchParams]);

  // if (categoryList) {
  //   if (categoryList.includes(category)) {
  //     setSearchParams({
  //       ...getSearchParams(),
  //       category: 'Cocktail',
  //     });
  //   }
  // }

  // useEffect(() => {
  //   if (!category) {
  //     return;
  //   }

  //   setSearchParams({
  //     ...getSearchParams(),
  //     category: 'All categories' ? '' : category,
  //   });
  // }, [setSearchParams, getSearchParams, category]);

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

    // console.log(getSearchParams());
  }, [getSearchParams, search]);

  if (isError) {
    notification('No drinks were found');
    // return;
  }

  return (
    <Container>
      <MainTitle title="Drinks"></MainTitle>
      <DrinksSearch onFilterChange={handleFilterChange}></DrinksSearch>
      {/* {isLoading && <LoadingSpinner />} */}
      <DrinksList cocktails={data}></DrinksList>
    </Container>
  );
};

export default DrinksPage;
