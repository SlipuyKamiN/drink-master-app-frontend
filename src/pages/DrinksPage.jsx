import DrinksSearch from 'components/DrinksPage/DrinksSearch';
import DrinksList from 'components/DrinksPage/DrinksList';
import Container from 'components/Shared/Container';
import MainTitle from 'components/Shared/MainTitle';
import { useLocation, useSearchParams } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useCallback, useEffect } from 'react';

const DrinksPage = ({ category }) => {
  const { width } = useWindowDimensions();
  const [searchParams, setSearchParams] = useSearchParams({
    // category: 'Cocktail',
    limit: 10,
  });
  const getSearchParams = useCallback(() => {
    return Object.fromEntries([...searchParams]);
  }, [searchParams]);
  const { search } = useLocation();

  useEffect(() => {
    if (!category) {
      setSearchParams({
        ...getSearchParams(),
        category: 'Cocktail',
      });
    } else {
      setSearchParams({
        ...getSearchParams(),
        category: 'All categories' ? '' : category,
        limit: width >= 1440 ? 9 : 10,
      });
    }
  }, [setSearchParams, width, getSearchParams, category]);

  const handleFilterChange = filter => {
    setSearchParams({
      ...getSearchParams(),
      ...filter,
    });
  };

  useEffect(() => {
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
