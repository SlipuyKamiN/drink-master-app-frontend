import AddRecipeForm from 'components/AddRecipePage/AddResipeForm/AddRecipeForm';
import FollowUsResipe from 'components/AddRecipePage/FollowUs';
import PopularRecipe from 'components/AddRecipePage/PopularRecipe';
import Container from 'components/Shared/Container';
import MainTitle from 'components/Shared/MainTitle';
import scss from '../components/AddRecipePage/AddResipeForm/AddRecipeForm.module.scss'


const AddRecipePage = () => {
  return (
    <Container>
      <MainTitle title="Add recipe" />
      <div className={scss.addRecipe}>
      <AddRecipeForm />
      <div className={scss.addRecipe__wrapper}>
      <FollowUsResipe />
      <PopularRecipe />
      </div>
      </div>
     
    </Container>
  );
};

export default AddRecipePage;
