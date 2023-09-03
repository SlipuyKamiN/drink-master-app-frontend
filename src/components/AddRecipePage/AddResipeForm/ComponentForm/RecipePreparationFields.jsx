import scss from './RecipePreparationFields.module.scss';

const RecipePreparationFields = ({ handleTextareaChange, instructions, isShowError }) => {
  return (
    <div className={scss.textarea}>
      <h3 className={scss.title}>Recipe Preparation</h3>
      <textarea
        className={scss.textarea__value}
        onChange={handleTextareaChange}
        rows="30"
        placeholder="Enter the recipe"
      />
       {isShowError && instructions.length === 0 && <p className={scss.error}>The field preparation must be filled</p>}
    </div>
  );
};

export default RecipePreparationFields;
