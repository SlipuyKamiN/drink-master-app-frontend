import { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import categories from './categories.json';
import ingridients from './ingredients.json';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import sass from './DrinksSearch.module.scss';

// change after backend connecting VVVVVVVVVV

const categoriesOptions = categories.map(item => {
  return { value: item, label: item };
});

const ingridientsOptions = ingridients.map(item => {
  return { value: item.title, label: item.title };
});

// change after backend connecting ^^^^^^^^^^^

const DrinksSearch = ({ onFilterChange }) => {
  const { register, handleSubmit } = useForm();
  const [filter, setFilter] = useState({});

  // console.log(filter);

  useEffect(() => {
    onFilterChange(filter);
  }, [filter, onFilterChange]);

  // const handleFilterChange = () => {
  //   onFilterChange(filter);
  // };

  // const { width } = useWindowDimensions();
  // const [searchParams, setSearchParams] = useSearchParams({
  //   category: 'Cocktail',
  //   limit: 10,
  // });
  // const { search } = useLocation();

  // const getSearchParams = useCallback(() => {
  //   return Object.fromEntries([...searchParams]);
  // }, [searchParams]);

  // useEffect(() => {
  //   setSearchParams({
  //     ...getSearchParams(),
  //     limit: width >= 1440 ? 9 : 10,
  //   });
  // }, [setSearchParams, width, getSearchParams]);

  // useEffect(() => {
  //   console.log(getSearchParams());
  // }, [search]);

  const handleSelectCategory = evt => {
    // onFilterChange(filter);
    setFilter({
      // ...getSearchParams(),
      ...filter,
      category: evt.value === 'All categories' ? '' : evt.value,
    });
    // onFilterChange(filter);
  };

  const handleSelectIngridients = evt => {
    // onFilterChange(filter);
    setFilter({
      // ...getSearchParams(),
      ...filter,
      ingredient: evt.value === 'All ingridients' ? '' : evt.value,
    });
    // onFilterChange(filter);
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
  };

  return (
    <div className={sass.wrapper}>
      <form
        className={sass.form}
        onSubmit={handleSubmit(data => {
          setFilter({
            // ...getSearchParams(),
            ...filter,
            search: data.name,
          });
          // onFilterChange(filter);
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
        placeholder="Select a category..."
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
        placeholder="Select ingridient..."
        defaultValue=""
        name="glasses"
        options={[
          { value: 'All ingridients', label: 'All ingridients' },
          ...ingridientsOptions,
        ]}
        onChange={handleSelectIngridients}
        styles={selectStyles}
      />
    </div>
  );
};

export default DrinksSearch;
