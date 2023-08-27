import Container from 'components/Shared/Container';
import AddYourCocktail from 'components/MainPage/AddYourCocktail';
// import PreviewDrinks from 'components/MainPage/PreviewDrinks';

import sass from '../components/MainPage/MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={sass.backgroundFoto}>
      <Container>
        <AddYourCocktail />
        {/* <PreviewDrinks /> */}
      </Container>
    </div>
  );
};

export default MainPage;
