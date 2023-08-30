import { nanoid } from '@reduxjs/toolkit';
import RecipeDescriptionFields from '././ComponentForm/RecipeDescriptionFields';
import RecipeIngredientsFields from '././ComponentForm/RecipeIngredientsFields';
import RecipePreparationFields from '././ComponentForm/RecipePreparationFields';
import scss from './AddRecipeForm.module.scss';
import { useState, useEffect } from 'react';
import { useSigninMutation } from 'redux/authSlice';
import { useCreateNewRecipeMutation } from 'redux/myRecipesSlice';
import { useNavigate } from "react-router-dom";
import { notification } from 'components/Shared/notification';

const AddRecipeForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [drink, setDrink] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [glass, setGlass] = useState('');
  const [ingredients, setIngredients] = useState([
    { id: nanoid(), ingredient: '', amount: '1', measurement: 'cl' },
  ]);
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState([]);

  const [dispatch1, { data: user }] = useSigninMutation();
  const [dispatch] =
    useCreateNewRecipeMutation();

    const navigate = useNavigate();
  useEffect(() => {
    dispatch1({ email: 'marias@gmail.com', password: 'Qwerty123' });
  }, []);

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  const handleDrinkChange = event => setDrink(event.target.value);
  const handleDescriptionChange = event => setDescription(event.target.value);
  const handleCategoryChange = event => setCategory(event.value);
  const handleGlassChange = event => setGlass(event.value);

  const handleIngredientsChange = (idToUpdate, field, value) => {
    setIngredients(() =>
      ingredients.map(item => {
        if (item.id === idToUpdate) {
          item[field] = value;
        }
        return item;
      })
    );
  };

  const handleTextareaChange = event => {
    const text = event.target.value;
    const lines = text.split('\n');
    setInstructions(lines);
  };

  const addIngredient = () => {
    setQuantity(prev => prev + 1);

    setIngredients(prev => [
      ...prev,
      { id: nanoid(), ingredient: '', amount: '', measurement: '' },
    ]);
  };

  const removeIngredient = idToRemove => {
    setIngredients(prev => prev.filter(({ id }) => id !== idToRemove));
  };

  const reductionIngredient = () => {
    if (quantity === 1) {
      return notification('Must have at leastone ingredient');
    }
    setQuantity(prev => prev - 1);
    setIngredients(prev => prev.slice(0, prev.length - 1));
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const ingredient = ingredients.map(item => {
      return {
        title: item.ingredient,
        measure: `${item.amount} ${item.measurement}`,
      };
    });

    const formData = new FormData();

    formData.append('drink', drink);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('glass', glass);
    formData.append('ingredients', JSON.stringify(ingredient));
    formData.append('instructions', JSON.stringify(instructions));
    formData.append('recipe', selectedImage);

    dispatch(formData).unwrap().then(()=> {
      navigate("/my");
    }).catch(error => notification(error.message));
    
    
  };

  
  return (
    <form onSubmit={handleFormSubmit} action="">
      <RecipeDescriptionFields
        handleInputChange={{
          handleFileChange,
          handleDrinkChange,
          handleCategoryChange,
          handleDescriptionChange,
          handleGlassChange,
        }}
        value={{ selectedImage, drink, description, category, glass }}
        user={user}
      />
      <RecipeIngredientsFields
        ingredients={ingredients}
        quantity={quantity}
        setIngredients={setIngredients}
        handleIngredientsChange={handleIngredientsChange}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        reductionIngredient={reductionIngredient}
        user={user}
      />
      <RecipePreparationFields handleTextareaChange={handleTextareaChange} />
      <button className={scss.btn} type="submit">
        Add
      </button>
    </form>
  );
};

export default AddRecipeForm;
