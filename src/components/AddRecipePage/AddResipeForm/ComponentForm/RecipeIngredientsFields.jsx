import scss from './RecipeIngredientsFields.module.scss';
import Select from 'react-select';

const RecipeIngredientsFields = () => {
  const options1 = [
    { value: 'lem', label: 'Lem' },
    { value: 'jus', label: 'Jus' },
    { value: 'beer', label: 'Beer' },
  ];
  const options2 = [
    { value: 'cl', label: 'cl' },
    // { value: 'csnake glass', label: 'Cnake glass' },
    // { value: 'beer glass', label: 'Beer glass' },
  ];
  return (
    <>
      <h3 className={scss.title}>Ingredients</h3>
      <button>-</button>
      <span className={scss.title}>1</span>
      <button>+</button>
      <Select options={options1} name="ingredien" placeholder="Ingredient" />
      <Select options={options2} name="measuremen" placeholder="Measurement" />
    </>
  );
};

export default RecipeIngredientsFields;
