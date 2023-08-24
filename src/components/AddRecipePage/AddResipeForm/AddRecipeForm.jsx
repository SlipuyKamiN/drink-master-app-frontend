import RecipeDescriptionFields from '././ComponentForm/RecipeDescriptionFields';
import RecipeIngredientsFields from '././ComponentForm/RecipeIngredientsFields';
import RecipePreparationFields from '././ComponentForm/RecipePreparationFields';
// import { useState } from 'react';

const AddResipeForm = () => {
  return (
    <form action="">
      <RecipeDescriptionFields />
      <RecipePreparationFields />
      <RecipeIngredientsFields />
    </form>
  );
};

export default AddResipeForm;
