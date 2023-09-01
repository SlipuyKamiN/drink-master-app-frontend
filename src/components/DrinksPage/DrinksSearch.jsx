import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { useGetCategoriesListQuery } from '../../redux/recipesSlice';
import { useGetIngredientsListQuery } from '../../redux/recipesSlice';
import sass from './DrinksSearch.module.scss';

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
    control: styles => ({
      ...styles,
      borderRadius: '200px',
      backgroundColor: '#161F37',
      height: '54px',
      color: '#F3F3F3',
      paddingLeft: '14px',
      border: 'none',
    }),
    input: styles => ({ ...styles, color: '#F3F3F3', border: 'none' }),
    inputContainer: styles => ({ ...styles, color: '#F3F3F3' }),
    option: styles => ({
      ...styles,
      color: '#F3F3F3',
      backgroundColor: '#161F37',
      border: 'none',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#F3F3F3',
      fontFamily: 'Manrope',
      fontSize: '14px',
    }),
    // menu: provided => ({
    //   ...provided,
    //   borderRadius: '100px !important',
    //   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    // }),
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
        <button className={sass.submit} type="submit"></button>
      </form>
      <Select
        className={sass.select}
        classNamePrefix="select"
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
        className={sass.select}
        classNamePrefix="select"
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
