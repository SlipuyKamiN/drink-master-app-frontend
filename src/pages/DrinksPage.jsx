import DrinksSearch from 'components/DrinksPage/DrinksSearch';
import DrinksList from 'components/DrinksPage/DrinksList';
import Container from 'components/Shared/Container';
import MainTitle from 'components/Shared/MainTitle';

const DrinksPage = () => {
  return (
    <Container>
      <MainTitle title="Drinks"></MainTitle>
      <DrinksSearch></DrinksSearch>
      <DrinksList></DrinksList>
      {/* <div>DrinksPage</div> */}
    </Container>
  );
};

export default DrinksPage;
