import scss from './RecipeIngredientsFields.module.scss';
import Select from 'react-select';
import { FiX, FiMinus, FiPlus } from 'react-icons/fi';
import { useGetIngredientsListQuery } from 'redux/recipesSlice';

const RecipeIngredientsFields = ({
  ingredients,
  quantity,
  isShowError,
  addIngredient,
  removeIngredient,
  handleIngredientsChange,
  reductionIngredient,
}) => {
  const { data: ingredientsList, isSuccess: isIngredients } =
    useGetIngredientsListQuery('');

  const handleIngredientChange = (idToUpdate, field, value) => {
    handleIngredientsChange(idToUpdate, field, value);
  };
  const ingredientsOptions = () => {
    const ingredientOption = ingredientsList.map(({ title }) => {
      return { value: title, label: title };
    });
    return ingredientOption;
  };

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
    <div className={scss.ingredients}>
      <div className={scss.wrapper}>
        <h3 className={scss.ingredients__title}>Ingredients</h3>
        <div className={scss.counter}>
          <button
            className={scss.counter__btn}
            type="button"
            onClick={reductionIngredient}
          >
            <FiMinus className={scss.counter__icon} size="16px" />
          </button>
          <p className={scss.counter__quantity}>{quantity}</p>
          <button
            className={scss.counter__btn}
            type="button"
            onClick={addIngredient}
          >
            <FiPlus className={scss.counter__icon} size="16px" />
          </button>
        </div>
      </div>
      <ul>
        {ingredients.map(({ id, amount, measurement, ingredient }) => (
          <li key={id} className={scss.ingredients__thumb}>
            <div className={scss.ingredients__wrapper}>
              <Select
                classNamePrefix="ingredient-select"
                options={isIngredients ? ingredientsOptions() : []}
                name="ingredient"
                onChange={event =>
                  handleIngredientChange(id, 'ingredient', event.value)
                }
                placeholder="Ingredient"
              />
              {isShowError && ingredient === '' && (
                <p className={scss.error}>
                  The field ingredient must be filled
                </p>
              )}
              <input
                className={scss.ingredients__input}
                type="text"
                name="amount"
                onChange={event =>
                  handleIngredientChange(
                    id,
                    event.target.name,
                    event.target.value
                  )
                }
                defaultValue="1"
                required
              />

              <Select
                classNamePrefix="amount-select"
                options={options2}
                name="measurement"
                onChange={event =>
                  handleIngredientChange(id, 'measurement', event.value)
                }
                placeholder=""
                defaultValue={options2[0]}
                required
              />
            </div>
            {ingredients.length !== 1 && (
              <button
                className={scss.ingredients__btn}
                type="button"
                onClick={() => {
                  removeIngredient(id);
                }}
              >
                <FiX className={scss.ingridients__icon} size="18px" />
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredientsFields;
