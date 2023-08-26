import scss from './RecipeIngredientsFields.module.scss';
import Select from 'react-select';
import { FiX } from 'react-icons/fi';

const RecipeIngredientsFields = ({
  ingredients,
  quantity,
  addIngredient,
  removeIngredient,
  handleIngredientsChange,
  reductionIngredient,
}) => {
  const handleIngredientChange = (idToUpdate, field, value) => {
    handleIngredientsChange(idToUpdate, field, value);
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
      <button type="button" onClick={reductionIngredient}>
        -
      </button>
      <span className={scss.title}>{quantity}</span>
      <button type="button" onClick={addIngredient}>
        +
      </button>
      <br />
      <br />
      {ingredients.map(({ id }) => (
        <div key={id} className={scss.thumb}>
          <Select
            className={scss.input}
            options={options1}
            name="ingredient"
            onChange={event =>
              handleIngredientChange(id, 'ingredient', event.value)
            }
            placeholder="Ingredient"
            required
          />
          <br />
          <input
            className={scss.input}
            type="text"
            name="amount"
            onChange={event =>
              handleIngredientChange(id, event.target.name, event.target.value)
            }
            placeholder="Amount ingredient"
            required
          />
          <br />
          <br />
          <Select
            className={scss.input}
            options={options2}
            name="measurement"
            onChange={event =>
              handleIngredientChange(id, 'measurement', event.value)
            }
            placeholder="Measurement"
            required
          />
          {ingredients.length !== 1 && (
            <button
              type="button"
              onClick={() => {
                removeIngredient(id);
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
