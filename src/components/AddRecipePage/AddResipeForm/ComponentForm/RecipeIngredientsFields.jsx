import scss from './RecipeIngredientsFields.module.scss';
import Select from 'react-select';

const RecipeIngredientsFields = ({
  value,
  handleInputChange,
  handleButonClick,
}) => {
  const options1 = [
    { value: 'lem', label: 'lem' },
    { value: 'jus', label: 'jus' },
    { value: 'beer', label: 'beer' },
  ];

  const options2 = [
    { value: 'cl', label: 'cl' },
    { value: 'oz', label: 'oz' },
    // { value: 'beer glass', label: 'Beer glass' },
  ];
  return (
    <>
      <h3 className={scss.title}>Ingredients</h3>
      <br />
      <button type="button" onClick={handleButonClick.removeIngredient}>
        -
      </button>
      <span className={scss.title}>{value.quantity}</span>
      <button type="button" onClick={handleButonClick.addIngredient}>
        +
      </button>
      <br />
      <br />
      <div className={scss.thumb}>
        <Select
          className={scss.input}
          options={options1}
          name="ingredient"
          value={value.ingredients}
          onChange={handleInputChange.handleIngredientsChang}
          placeholder="Ingredient"
        />
        <br />
        <input
          className={scss.input}
          type="text"
          name="amount"
          id=""
          placeholder="Amount ingredient"
          onChange={handleInputChange.handleAmountIngredients}
          value={value.drink}
        />
        <br />
        <br />
        <Select
          className={scss.input}
          options={options2}
          name="measuremen"
          value={value.measuremen}
          onChange={handleInputChange.handlMeasuremenChang}
          placeholder="Measurement"
        />
      </div>
    </>
  );
};

export default RecipeIngredientsFields;
