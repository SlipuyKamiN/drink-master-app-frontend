import RecipeDescriptionFields from '././ComponentForm/RecipeDescriptionFields';
import RecipeIngredientsFields from '././ComponentForm/RecipeIngredientsFields';
import RecipePreparationFields from '././ComponentForm/RecipePreparationFields';
import scss from './AddRecipeForm.module.scss';
import { useState } from 'react';

const AddRecipeForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [drink, setDrink] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [glass, setGlass] = useState('');
  const [ingredients, setIngredients] = useState([
    { title: '', amount: '', measure: '' },
  ]);
  const [quantity, setQuantity] = useState(1);

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  const handleDrinkChange = event => {
    setDrink(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = event => {
    setCategory(event.value);
  };

  const handleGlassChange = event => {
    setGlass(event.value);
  };

  const handleIngredientsChange = event => {
    setIngredients(prev => [...prev, event.value]);
  };

  const addIngredient = event => {
    setQuantity(prev => prev + 1);
  };

  const removeIngredient = event => {
    if (quantity === 1) {
      return alert('Must have at leastone ingredient');
    }

    setQuantity(prev => prev - 1);
  };

  // const handleFormSubmit = event => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append('image', selectedImage);
  // };
  return (
    <form className={scss.form} action="">
      <RecipeDescriptionFields
        handleInputChange={{
          handleFileChange,
          handleDrinkChange,
          handleCategoryChange,
          handleDescriptionChange,
          handleGlassChange,
        }}
        value={{ selectedImage, drink, description, category, glass }}
      />
      <br />
      <br />
      <RecipeIngredientsFields
        value={{ ingredients, quantity }}
        handleInputChange={{
          handleIngredientsChange,
        }}
        handleButonClick={{ addIngredient, removeIngredient }}
      />
      <br />
      <br />
      <RecipePreparationFields />
    </form>
  );
};

export default AddRecipeForm;
