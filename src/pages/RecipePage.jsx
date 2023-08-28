import RecipeInngredientsList from 'components/RecipePage/RecipeInngredientsList';
import RecipePageHero from 'components/RecipePage/RecipePageHero';
import RecipePreparation from 'components/RecipePage/RecipePreparation';

const RecipePage = () => {
  return (
    <>
      <RecipePageHero />
      <RecipeInngredientsList />
      <RecipePreparation />
    </>
  );
};

export default RecipePage;
