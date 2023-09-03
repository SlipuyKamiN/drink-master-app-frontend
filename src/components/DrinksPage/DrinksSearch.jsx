import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { useGetCategoriesListQuery } from '../../redux/recipesSlice';
import { useGetIngredientsListQuery } from '../../redux/recipesSlice';
import sass from './DrinksSearch.module.scss';
import { FiSearch } from 'react-icons/fi';

const DrinksSearch = ({ onFilterChange }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'All categories';
  const initialIngredient = searchParams.get('ingredient') || 'All ingredients';

  useEffect(() => {
    setSearch(initialSearch);
    setCategory(initialCategory);
    setIngredient(initialIngredient);
  }, [location, initialSearch, initialCategory, initialIngredient]);

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [ingredient, setIngredient] = useState(initialIngredient);

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
    setCategory(evt.value === 'All categories' ? '' : evt.value);
    setFilter({
      ...filter,
      category: evt.value === 'All categories' ? '' : evt.value,
    });
  };

  const handleSelectingredients = evt => {
    setIngredient(evt.value === 'All ingredients' ? '' : evt.value);
    setFilter({
      ...filter,
      ingredient: evt.value === 'All ingredients' ? '' : evt.value,
    });
  };

  const selectStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#f3f3f3' : 'rgba(243, 243, 243, 0.4)',
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
          value={search}
          onChange={e => setSearch(e.target.value)}
        ></input>
        <button className={sass.submit} type="submit">
          <FiSearch className={sass.icon} />
        </button>
      </form>
      <Select
        classNamePrefix="drinks-page-selector"
        placeholder="Select..."
        defaultValue=""
        name="category"
        value={{ value: category, label: category }}
        options={[
          { value: 'All categories', label: 'All categories' },
          ...categoriesOptions,
        ]}
        onChange={handleSelectCategory}
        styles={selectStyles}
      />
      <Select
        classNamePrefix="drinks-page-selector"
        placeholder="Select..."
        defaultValue=""
        name="ingredient"
        value={{ value: ingredient, label: ingredient }}
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
