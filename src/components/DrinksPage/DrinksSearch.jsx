import cocktails from './cocktails.json';
import { useState, useEffect } from 'react';
import categories from './categories.json';
import ingredients from './ingredients.json';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import sass from './DrinksSearch.module.scss';

const categoriesOptions = categories.map(item => {
  return { value: item, label: item };
});

const ingredientsOptions = ingredients.map(item => {
  return { value: item.title, label: item.title };
});

const DrinksSearch = () => {
  const { register, handleSubmit } = useForm();
  const [searchedCocktail, setSearchedCocktail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState('');

  useEffect(() => {
    const searchParams = {
      searchedCocktail,
      selectedCategory,
      selectedIngredients,
    };

    if (!searchedCocktail && !selectedCategory && !selectedIngredients) {
      return;
    }

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
    console.log(searchParams);
  }, [searchedCocktail, selectedCategory, selectedIngredients]);

  const handleSelectCategory = evt => setSelectedCategory(evt.value);

  const handleSelectIngredients = evt => setSelectedIngredients(evt.value);

  return (
    <div className={sass.wrapper}>
      <form
        onSubmit={handleSubmit(data => {
          setSearchedCocktail(data.name);
        })}
      >
        <input
          {...register('name')}
          placeholder="Enter the text"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        ></input>
        <button type="submit"></button>
      </form>
      <Select
        className={sass.select}
        classNamePrefix="select"
        defaultValue=""
        name="category"
        options={categoriesOptions}
        onChange={handleSelectCategory}
      />
      <Select
        className={sass.select}
        classNamePrefix="select"
        defaultValue=""
        name="glasses"
        options={ingredientsOptions}
        onChange={handleSelectIngredients}
      />
    </div>
  );
};

export default DrinksSearch;
