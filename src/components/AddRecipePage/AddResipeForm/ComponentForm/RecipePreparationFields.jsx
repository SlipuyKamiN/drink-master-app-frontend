import scss from './RecipeIngredientsFields.module.scss';

const RecipePreparationFields = ({ handleTextareaChange }) => {
  return (
    <>
      <h3 className={scss.title}>Recipe Preparation</h3>
      <textarea
        style={{ maxHeight: '100px' }}
        onChange={handleTextareaChange}
        rows="30"
        placeholder="Enter the recipe"
      />
    </>
  );
};

export default RecipePreparationFields;
