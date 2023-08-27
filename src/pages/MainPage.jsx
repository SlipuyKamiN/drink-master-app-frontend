import Container from 'components/Shared/Container';
import AddYourCocktail from 'components/MainPage/AddYourCocktail';
// import PreviewDrinks from 'components/MainPage/PreviewDrinks';

const MainPage = () => {
  return (
    <>
      <AddYourCocktail />
      <Container>{/* <PreviewDrinks /> */}</Container>
    </>
  );
};

export default MainPage;
