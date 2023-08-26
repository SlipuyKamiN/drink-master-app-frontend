import scss from './RecipeIngredientsFields.module.scss';
import Select from 'react-select';
import { FiX } from 'react-icons/fi';

const RecipeIngredientsFields = ({
  quantity,
  addIngredient,
  removeIngredient,
  handleIngredientsChange,
}) => {
  const inputIndices = Array.from({ length: quantity }, (_, index) => index);

  const handleIngredientNameChange = (index, value) => {
    handleIngredientsChange(index, 'ingredient', value);
  };

  const handleAmountChange = (index, value) => {
    handleIngredientsChange(index, 'amount', value);
  };

  const handleMeasurementChange = (index, value) => {
    handleIngredientsChange(index, 'measurement', value);
  };

  const options1 = [
    { value: 'lem', label: 'lem' },
    { value: 'jus', label: 'jus' },
    { value: 'beer', label: 'beer' },
  ];

  const options2 = [
    { value: 'cl', label: 'cl' },
    { value: 'oz', label: 'oz' },
    { value: 'tsp', label: 'tsp' },
    { value: 'tblsp', label: 'tblsp' },
    { value: 'part', label: 'part' },
    { value: 'ml', label: 'ml' },
    { value: 'shot', label: 'shot' },
    { value: 'cubes', label: 'cubes' },
    { value: 'cups', label: 'cups' },
  ];
  return (
    <>
      <h3 className={scss.title}>Ingredients</h3>
      <br />
      <button type="button" onClick={removeIngredient}>
        -
      </button>
      <span className={scss.title}>{quantity}</span>
      <button type="button" onClick={addIngredient}>
        +
      </button>
      <br />
      <br />
      {inputIndices.map(index => (
        <div key={index} className={scss.thumb}>
          <Select
            className={scss.input}
            options={options1}
            name={index}
            onChange={event => handleIngredientNameChange(index, event.value)}
            placeholder="Ingredient"
            required
          />
          <br />
          <input
            className={scss.input}
            type="text"
            name={`amount-${index}`}
            onChange={event => handleAmountChange(index, event.target.value)}
            placeholder="Amount ingredient"
            required
          />
          <br />
          <br />
          <Select
            className={scss.input}
            options={options2}
            name={`measurement-${index}`}
            onChange={event => handleMeasurementChange(index, event.value)}
            placeholder="Measurement"
            required
          />
          {quantity !== 1 && (
            <button
              type="button"
              onClick={() => {
                removeIngredient(index);
              }}
            >
              <FiX fontSize="35px" />
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default RecipeIngredientsFields;
