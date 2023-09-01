import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { useGetCategoriesListQuery } from '../../redux/recipesSlice';
import { useGetIngredientsListQuery } from '../../redux/recipesSlice';
import sass from './DrinksSearch.module.scss';
import { FiSearch } from 'react-icons/fi';

const DrinksSearch = ({ onFilterChange }) => {
  const { data: categoryList } = useGetCategoriesListQuery();
  const { data: ingredientsList } = useGetIngredientsListQuery();
  const { register, handleSubmit } = useForm();
  const [filter, setFilter] = useState({});
  let categoriesOptions = [];
  let ingredientsOptions = [];

  if (categoryList && ingredientsList) {
    const categories = categoryList.map(item => {
      return { value: item, label: item };
    });
    categoriesOptions.push(...categories);
    const ingredients = ingredientsList.map(item => {
      return { value: item.title, label: item.title };
    });
    ingredientsOptions.push(...ingredients);
  }

  useEffect(() => {
    onFilterChange(filter);
  }, [filter, onFilterChange]);

  const handleSelectCategory = evt => {
    setFilter({
      ...filter,
      category: evt.value === 'All categories' ? '' : evt.value,
    });
  };

  const handleSelectingredients = evt => {
    setFilter({
      ...filter,
      ingredient: evt.value === 'All ingredients' ? '' : evt.value,
    });
  };

  const selectStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#f3f3f3' : 'rgba(243, 243, 243, 0.4)', // Колір тексту обраної опції
    }),
  };

  return (
    <div className={sass.wrapper}>
      <form
        className={sass.form}
        onSubmit={handleSubmit(data => {
          setFilter({
            ...filter,
            search: data.name,
          });
        })}
      >
        <input
          className={sass.input}
          {...register('name')}
          placeholder="Enter the text"
          type="text"
          name="name"
        ></input>
        <button className={sass.submit} type="submit">
          <FiSearch className={sass.icon} />
        </button>
      </form>
      <Select
        // className={sass.select}
        classNamePrefix="drinks-page-selector"
        placeholder="Select..."
        defaultValue=""
        name="category"
        options={[
          { value: 'All categories', label: 'All categories' },
          ...categoriesOptions,
        ]}
        onChange={handleSelectCategory}
        styles={selectStyles}
      />
      <Select
        // className={sass.select}
        classNamePrefix="drinks-page-selector"
        placeholder="Select..."
        defaultValue=""
        name="glasses"
        options={[
          { value: 'All ingredients', label: 'All ingredients' },
          ...ingredientsOptions,
        ]}
        onChange={handleSelectingredients}
        styles={selectStyles}
      />
    </div>
  );
};

export default DrinksSearch;
