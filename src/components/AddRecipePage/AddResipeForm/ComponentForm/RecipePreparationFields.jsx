import scss from './RecipePreparationFields.module.scss';

const RecipePreparationFields = ({ handleTextareaChange }) => {
  return (
    <div className={scss.wrapper__textarea}>
      <h3 className={scss.title}>Recipe Preparation</h3>
      <textarea
        className={scss.textarea}
        // style={{ maxHeight: '100px' }}
        onChange={handleTextareaChange}
        rows="30"
        placeholder="Enter the recipe"
      />
    </div>
  );
};

export default RecipePreparationFields;
