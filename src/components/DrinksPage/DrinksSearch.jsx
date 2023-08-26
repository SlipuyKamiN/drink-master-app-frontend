// import cocktails from './cocktails.json';
import categories from './categories.json';
import ingredients from './ingredients.json';
import Select from 'react-select';
import sass from './DrinksSearch.module.scss';

const categoriesOptions = categories.map(item => {
  return { value: item, label: item };
});

const ingredientsOptions = ingredients.map(item => {
  return { value: item.title, label: item.title };
});

const DrinksSearch = () => {
  return (
    <div>
      <Select
        className={sass.select}
        classNamePrefix="select"
        defaultValue={categoriesOptions[0]}
        name="category"
        options={categoriesOptions}
      />
      <Select
        className={sass.select}
        classNamePrefix="select"
        defaultValue={ingredientsOptions[0]}
        name="glasses"
        options={ingredientsOptions}
      />
    </div>
  );
};

export default DrinksSearch;
