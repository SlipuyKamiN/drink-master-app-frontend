import scss from './RecipeIngredientsFields.module.scss';
import Select from 'react-select';
import { FiX, FiMinus, FiPlus } from 'react-icons/fi';

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
    <div className={scss.wraper__ingridients}>
      <div className={scss.wraper__ingridient}>
        <h3 className={scss.recipe__title}>Ingredients</h3>
        <div className={scss.counter}>
          <button
            className={scss.counter__btn}
            type="button"
            onClick={reductionIngredient}
          >
            <FiMinus className={scss.counter__icon} />
          </button>
          <p>{quantity}</p>
          <button
            className={scss.counter__btn}
            type="button"
            onClick={addIngredient}
          >
            <FiPlus className={scss.counter__icon} />
          </button>
        </div>
      </div>
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
              className={scss.counter__btn}
              type="button"
              onClick={() => {
                removeIngredient(id);
              }}
            >
              <FiX className={scss.ingridient__icon} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeIngredientsFields;
