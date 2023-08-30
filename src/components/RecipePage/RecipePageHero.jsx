import { useSelector } from 'react-redux';
import { useToggleFavoriteMutation } from 'redux/recipesSlice';
import Container from 'components/Shared/Container';
import placeholder from 'images/thumb-placeholder-large.png';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
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
  videoLink,
} = sass;

const RecipePageHero = ({ recipe }) => {
  console.log(recipe);
  const userId = useSelector(state => state.user._id);

  const isFavorite = recipe?.users.find(() => userId);

  const [dispatch, { isLoading }] = useToggleFavoriteMutation();

  const handleFavButtonClick = () => {
    dispatch(recipe._id);
  };

  return (
    <Container>
      <div className={heroWrapper}>
        <div className={beverageInfo}>
          <p className={glassType}>{recipe?.glass}</p>
          <h2 className={`${titleStyles.title} ${titleDistance}`}>
            {recipe?.drink}
          </h2>
          <p className={description}>{recipe?.description}</p>
          <button className={addToFavButton} onClick={handleFavButtonClick}>
            {isFavorite
              ? 'Remove from favorite recipe'
              : 'Add to favorite recipe'}
            {isLoading && <LoadingSpinner />}
          </button>
          {recipe?.video && (
            <a
              href={recipe.video}
              target="_blank"
              rel="noreferrer"
              className={videoLink}
            >
              Click to see a video instruction
            </a>
          )}
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
