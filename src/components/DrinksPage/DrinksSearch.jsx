import { useCallback, useEffect } from 'react';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { useGetCategoriesListQuery } from '../../redux/recipesSlice';
import { useGetIngredientsListQuery } from '../../redux/recipesSlice';
import sass from './DrinksSearch.module.scss';
import { FiSearch } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';

const DrinksSearch = ({ categoryName }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: categoryList } = useGetCategoriesListQuery();
  const { data: ingredientsList } = useGetIngredientsListQuery();
  const { register, handleSubmit } = useForm();
  const category = searchParams.get('category');
  let categoriesOptions = [];
  let ingredientsOptions = [];
  categoryName = categoryName.replace('_', '/');

  const handleSetParams = useCallback(
    (key, value) => {
      const params = Object.fromEntries([...searchParams]);

      setSearchParams({
        ...params,
        [key]: value,
      });
    },
    [searchParams, setSearchParams]
  );

  if (categoryList && ingredientsList) {
    ingredientsList.map(item =>
      ingredientsOptions.push({ value: item.title, label: item.title })
    );
    categoryList.map(item =>
      categoriesOptions.push({ value: item, label: item })
    );
  }

  useEffect(() => {
    if (categoryName === 'all' && !searchParams.get('category')) {
      handleSetParams('category', 'Cocktail');
      return;
    }

    if (!categoryName && !searchParams.get('category')) {
      handleSetParams('category', 'Cocktail');
      return;
    }

    if (categoryName && !searchParams.get('category')) {
      handleSetParams('category', categoryName);
      return;
    }
  }, [categoryName, handleSetParams, searchParams]);

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
        onSubmit={handleSubmit(({ name }) => {
          handleSetParams('search', name);
        })}
      >
        <input
          className={sass.input}
          defaultValue={searchParams.get('search') || ''}
          {...register('name')}
          placeholder="Enter the text"
          type="text"
          name="name"
        />
        <button className={sass.submit} type="submit">
          <FiSearch className={sass.icon} />
        </button>
      </form>
      <Select
        classNamePrefix="drinks-page-selector"
        placeholder="Select..."
        name="category"
        defaultValue={{
          value: category || 'Cocktail',
          label: category || 'Cocktail',
        }}
        options={[{ value: '', label: 'All categories' }, ...categoriesOptions]}
        onChange={data => handleSetParams('category', data.value)}
        styles={selectStyles}
      />
      <Select
        classNamePrefix="drinks-page-selector"
        placeholder="Select..."
        name="ingredient"
        options={[
          { value: '', label: 'All ingredients' },
          ...ingredientsOptions,
        ]}
        onChange={data => handleSetParams('ingredient', data.value)}
        styles={selectStyles}
      />
    </div>
  );
};

export default DrinksSearch;
