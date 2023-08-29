import Container from 'components/Shared/Container';
import titleStyles from 'components/Shared/MainTitle.module.scss';
import sass from './RecipePageHero.module.scss';
import placeholder from 'images/thumb-placeholder-large.png';

const {
  heroWrapper,
  glassType,
  titleDistance,
  description,
  addToFavButton,
  beverageImg,
  beverageInfo,
} = sass;

const RecipePageHero = ({ recipe }) => {
  return (
    <Container>
      <div className={heroWrapper}>
        <div className={beverageInfo}>
          <p className={glassType}>{recipe?.glass}</p>
          <h2 className={`${titleStyles.title} ${titleDistance}`}>
            {recipe?.drink}
          </h2>
          <p className={description}>{recipe?.description}</p>
          <button className={addToFavButton}>
            {/* {recipe.isFavorite
              ? 'Remove from favorite recipe'
              : 'Add to favorite recipe'} */}
            Add to favorite recipe
          </button>
        </div>

        <img
          className={beverageImg}
          src={recipe?.drinkThumb ?? placeholder}
          alt="Beverage"
        />
      </div>
    </Container>
  );
};

export default RecipePageHero;
