import scss from './RecipeIngredientsFields.module.scss';
import Select from 'react-select';
import { FiX } from 'react-icons/fi';

const RecipeIngredientsFields = ({
  ingredients,
  quantity,
  addIngredient,
  removeIngredient,
  handleIngredientsChange,
}) => {
  console.log(ingredients);
  const inputIndices = Array.from({ length: quantity }, (_, item) => item);

  const handleIngredientNameChange = (idToUpdate, value) => {
    handleIngredientsChange(idToUpdate, 'ingredient', value);
  };

  const handleAmountChange = (idToUpdate, value) => {
    handleIngredientsChange(idToUpdate, 'amount', value);
  };

  const handleMeasurementChange = (idToUpdate, value) => {
    handleIngredientsChange(idToUpdate, 'measurement', value);
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
      {ingredients.map(item => (
        <div key={item.id} className={scss.thumb}>
          <Select
            className={scss.input}
            options={options1}
            name={item}
            onChange={event => handleIngredientNameChange(item.id, event.value)}
            placeholder="Ingredient"
            required
          />
          <br />
          <input
            className={scss.input}
            type="text"
            value={item.amount}
            name={`amount-${item}`}
            onChange={event => handleAmountChange(item.id, event.target.value)}
            placeholder="Amount ingredient"
            required
          />
          <br />
          <br />
          <Select
            className={scss.input}
            options={options2}
            name={`measurement-${item}`}
            onChange={event => handleMeasurementChange(item.id, event.value)}
            placeholder="Measurement"
            required
          />
          {ingredients.length !== 1 && (
            <button
              type="button"
              onClick={() => {
                console.log(item);
                removeIngredient(item.id);
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
