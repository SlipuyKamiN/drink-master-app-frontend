import RecipeDescriptionFields from '././ComponentForm/RecipeDescriptionFields';
import RecipeIngredientsFields from '././ComponentForm/RecipeIngredientsFields';
import RecipePreparationFields from '././ComponentForm/RecipePreparationFields';
import scss from './AddRecipeForm.module.scss';
import { useState } from 'react';

const AddRecipeForm = () => {
  const [drink, setDrink] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [glass, setGlass] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [quantity, setQuantity] = useState(null);

  const handleDrinkChange = event => {
    setDrink(() => event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(() => event.target.value);
  };

  const handleCategoryChange = event => {
    setCategory(() => event.target.value);
  };

  const handleGlassChange = event => {
    setGlass(() => event.target.value);
  };

  const handleIngredientsChange = event => {
    setIngredients(() => event.target.value);
  };

  const handleQuantityChange = event => {
    setQuantity(() => event.target.value);
  };
  return (
    <form className={scss.form} action="">
      <RecipeDescriptionFields />
      <br />
      <br />
      <RecipeIngredientsFields />
      <br />
      <br />
      <RecipePreparationFields />
    </form>
  );
};

export default AddRecipeForm;
