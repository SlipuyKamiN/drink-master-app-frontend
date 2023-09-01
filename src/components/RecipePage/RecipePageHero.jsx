import { useSelector } from 'react-redux';
import { useToggleFavoriteMutation } from 'redux/recipesSlice';
import Container from 'components/Shared/Container';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import titleStyles from 'components/Shared/MainTitle.module.scss';
import sass from './RecipePageHero.module.scss';

import largePlaceholder from 'images/thumb-placeholder-large.png';
import mediumPlaceholder from 'images/thumb-placeholder-medium.png';
import smallPlaceholder from '../../images/thumb-placeholder-small.png';

const {
  heroWrapper,
  glassType,
  titleExtraStyles,
  description,
  addToFavButton,
  beverageImg,
  beverageInfo,
  videoLink,
  heroSection,
} = sass;

const RecipePageHero = ({ recipe }) => {
  const userId = useSelector(state => state.user._id);

  const isFavorite = recipe?.users.find(() => userId);

  const [dispatch, { isLoading }] = useToggleFavoriteMutation();

  const handleFavButtonClick = () => {
    dispatch(recipe._id);
  };

  return (
    <section className={heroSection}>
      <Container>
        <div className={heroWrapper}>
          <div className={beverageInfo}>
            <p className={glassType}>{recipe?.glass}</p>
            <h2 className={`${titleStyles.title} ${titleExtraStyles}`}>
              {recipe?.drink}
            </h2>
            {recipe?.description && (
              <p className={description}>{recipe.description}</p>
            )}
            <button className={addToFavButton} onClick={handleFavButtonClick}>
              {isFavorite
                ? 'Remove from favorite recipe'
                : 'Add to favorite recipe'}
              {isLoading && <LoadingSpinner size={20} />}
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
            srcSet={
              recipe?.drinkThumb
                ? `${recipe.drinkThumb} 400w, ${recipe.drinkThumb} 220w, ${recipe.drinkThumb} 90w`
                : `${largePlaceholder} 400w, ${mediumPlaceholder} 220w, ${smallPlaceholder} 90w`
            }
            sizes="(min-width: 1440px) 400px, (min-width: 768px) 220px, (min-width: 375px) 90px, 100vw"
            src={recipe?.drinkThumb ?? smallPlaceholder}
            alt="Beverage"
          />
        </div>
      </Container>
    </section>
  );
};

export default RecipePageHero;
