import Container from 'components/Shared/Container';
import titleStyles from 'components/Shared/MainTitle.module.scss';
import sass from './RecipePageHero.module.scss';
const {
  heroWrapper,
  glassType,
  titleDistance,
  description,
  addToFavButton,
  beverageImg,
  beverageInfo,
} = sass;

const RecipePageHero = () => {
  return (
    <Container>
      <div className={heroWrapper}>
        <div className={beverageInfo}>
          <p className={glassType}>Highball glass</p>
          <h2 className={`${titleStyles.title} ${titleDistance}`}>Borjomi</h2>
          <p className={description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
            augue lacus. Nulla vel ligula ac mi accumsan accumsan. Aliquam et
            placerat diam, iaculis ullamcorper lorem. Nulla mollis diam in magna
            placerat commodo.
          </p>
          <button className={addToFavButton}>Add to favorite recipe</button>
        </div>

        <img
          className={beverageImg}
          src="https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Beverage"
        />
      </div>
    </Container>
  );
};

export default RecipePageHero;
