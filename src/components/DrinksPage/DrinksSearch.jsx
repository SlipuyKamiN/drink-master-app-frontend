// delete after backend connecting VVVVVVVVVV
import cocktails from './cocktails.json';
// delete after backend connecting ^^^^^^^^^^^
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import categories from './categories.json';
import ingredients from './ingredients.json';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import windowDimensions from '../../hooks/useWindowDimensions';
import sass from './DrinksSearch.module.scss';

// change after backend connecting VVVVVVVVVV

const categoriesOptions = categories.map(item => {
  return { value: item, label: item };
});

const ingredientsOptions = ingredients.map(item => {
  return { value: item.title, label: item.title };
});

// change after backend connecting ^^^^^^^^^^^

const DrinksSearch = () => {
  const { register, handleSubmit } = useForm();
  const [searchedCocktail, setSearchedCocktail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Cocktail');
  const [selectedIngredients, setSelectedIngredients] = useState('');
  const [perPage, setPerpage] = useState(10);
  const [searchParams, setSearchParams] = useSearchParams('');

  // const search = searchParams.get('search');
  // const ingredient = searchParams.get('ingredient');
  // const category = searchParams.get('category');
  // const page = searchParams.get('page');
  // const limit = searchParams.get('limit');

  const { width } = windowDimensions();

  useEffect(() => {
    setPerpage(width >= 1440 ? 9 : 10);
  }, [perPage, width]);

  const allParams = Object.fromEntries([...searchParams]);
  useEffect(() => {
    // setSearchParams({
    //   search: searchedCocktail,
    //   ingredient: selectedIngredients,
    //   category: selectedCategory,
    //   page: 1,
    //   limit: perPage,
    // });

    // delete after backend connecting VVVVVVVVVV

    const Params = {
      searchedCocktail,
      selectedCategory,
      selectedIngredients,
      perPage,
    };

    const filtred = cocktails.filter(
      item =>
        (!selectedCategory ||
          item.category.toLowerCase() === selectedCategory.toLowerCase()) &&
        (!selectedIngredients ||
          item.ingredients.some(
            subItem =>
              subItem.title.toLowerCase() === selectedIngredients.toLowerCase()
          )) &&
        (!searchedCocktail ||
          item.drink.toLowerCase().includes(searchedCocktail.toLowerCase()))
    );

    console.log(filtred);
    console.log(Params);

    // delete after backend connecting ^^^^^^^^^^^
  }, [
    searchParams,
    setSearchParams,
    perPage,
    searchedCocktail,
    selectedCategory,
    selectedIngredients,
  ]);

  const handleSelectCategory = evt =>
    // setSelectedCategory(evt.value === 'All categories' ? '' : evt.value);
    setSearchParams({
      ...allParams,
      category: evt.value === 'All categories' ? '' : evt.value,
    });

  const handleSelectIngredients = evt =>
    // setSelectedIngredients(evt.value === 'All ingredients' ? '' : evt.value);
    setSearchParams({
      ...allParams,
      ingredient: evt.value === 'All ingredients' ? '' : evt.value,
    });

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
          setSearchedCocktail(data.name);
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
        placeholder="Select ingredient..."
        defaultValue=""
        name="glasses"
        options={[
          { value: 'All ingredients', label: 'All ingredients' },
          ...ingredientsOptions,
        ]}
        onChange={handleSelectIngredients}
        styles={selectStyles}
      />
    </div>
  );
};

export default DrinksSearch;
