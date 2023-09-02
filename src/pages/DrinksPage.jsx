import DrinksSearch from 'components/DrinksPage/DrinksSearch';
import DrinksList from 'components/DrinksPage/DrinksList';
import Container from 'components/Shared/Container';
import DrinkPageTitle from 'components/DrinksPage/DrinkPageTitle';
import { useSearchParams } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useCallback, useEffect, useState } from 'react';
import { useSearchRecipesQuery } from '../redux/recipesSlice';
import { useParams } from 'react-router-dom';
import { notification } from 'components/Shared/notification';
import { useGetCategoriesListQuery } from '../redux/recipesSlice';

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

  // const handlePageChange = useCallback(
  //   page => {
  //     setSearchParams({
  //       ...getSearchParams(),
  //       ...page,
  //     });
  //   },
  //   [getSearchParams, setSearchParams]
  // );

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
  }, [getSearchParams, isError]);

  if (isError) {
    notification('No drinks were found');
  }

  return (
    <Container>
      <DrinkPageTitle title="Drinks" />
      <DrinksSearch onFilterChange={handleFilterChange} />
      <DrinksList cocktails={data} />
      {/* <Pagination
        onPageChange={handlePageChange}
        limit={getSearchParams().limit}
        totalDrinks={data.totalHits}
      ></Pagination> */}
    </Container>
  );
};

export default DrinksPage;
