import { useParams } from 'react-router-dom';
import { useGetRecipeByIdQuery } from 'redux/recipesSlice';
import RecipeInngredientsList from 'components/RecipePage/RecipeInngredientsList';
import RecipePageHero from 'components/RecipePage/RecipePageHero';
import RecipePreparation from 'components/RecipePage/RecipePreparation';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import { notification } from 'components/Shared/notification';

const RecipePage = () => {
  const { recipeId } = useParams();

  const { data, isLoading, isError } = useGetRecipeByIdQuery(recipeId, {});

  if (isError) notification();

  if (!data || isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <RecipePageHero recipe={data} />
      <RecipeInngredientsList ingredients={data.ingredients} />
      <RecipePreparation instructions={data.instructions} />
    </>
  );
};

export default RecipePage;
