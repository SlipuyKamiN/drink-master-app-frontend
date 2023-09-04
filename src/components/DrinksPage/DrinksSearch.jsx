import { useCallback, useEffect } from 'react';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { useGetCategoriesListQuery } from '../../redux/recipesSlice';
import { useGetIngredientsListQuery } from '../../redux/recipesSlice';
import sass from './DrinksSearch.module.scss';
import { FiSearch } from 'react-icons/fi';
import { useSearchParams, useParams } from 'react-router-dom';

const DrinksSearch = () => {
  const { categoryName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const ingredient = searchParams.get('ingredient');
  const categoryFromLink = categoryName.replace('_', '/');
  const { data: categoryList } = useGetCategoriesListQuery();
  const { data: ingredientsList } = useGetIngredientsListQuery();
  const { register, handleSubmit } = useForm();
  let categoriesOptions = [];
  let ingredientsOptions = [];

  const handleSetSearchtParams = useCallback(
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
    categoryList.map(item =>
      categoriesOptions.push({ value: item, label: item })
    );
    ingredientsList.map(item =>
      ingredientsOptions.push({ value: item.title, label: item.title })
    );
  }

  useEffect(() => {
    if (!category && categoryFromLink === 'All categories') {
      handleSetSearchtParams('category', 'All categories');
      return;
    }

    if (!category && categoryFromLink) {
      handleSetSearchtParams('category', categoryFromLink);
      return;
    }
  }, [categoryFromLink, handleSetSearchtParams, category]);

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
          handleSetSearchtParams('search', name);
        })}
      >
        <input
          className={sass.input}
          type="text"
          name="name"
          {...register('name')}
          placeholder="Enter the text"
          defaultValue={searchParams.get('search') || ''}
        />
        <button className={sass.submit} type="submit">
          <FiSearch className={sass.icon} />
        </button>
      </form>
      <Select
        classNamePrefix="drinks-page-selector"
        placeholder="Select..."
        defaultValue={{
          value: category || 'All categories',
          label: category || 'All categories',
        }}
        name="category"
        value={{ value: '', label: category }}
        options={[
          { value: 'All categories', label: 'All categories' },
          ...categoriesOptions,
        ]}
        onChange={data => handleSetSearchtParams('category', data.value)}
        styles={selectStyles}
      />
      <Select
        classNamePrefix="drinks-page-selector"
        placeholder="Select..."
        defaultValue={{
          value: 'All ingredients',
          label: 'All ingredients',
        }}
        name="ingredient"
        value={{ value: '', label: ingredient || 'All ingredients' }}
        options={[
          { value: 'All ingredients', label: 'All ingredients' },
          ...ingredientsOptions,
        ]}
        onChange={data => handleSetSearchtParams('ingredient', data.value)}
        styles={selectStyles}
      />
    </div>
  );
};

export default DrinksSearch;
