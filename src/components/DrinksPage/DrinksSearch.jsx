import cocktails from './cocktails.json';
import { useState, useEffect } from 'react';
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
  const [textInput, setTextInput] = useState('');
  const [searchedCocktail, setSearchedCocktail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState('');
  const [filtredCocktails, setFiltredCocktails] = useState([]);

  useEffect(() => {
    if (!searchedCocktail && !selectedCategory && !selectedIngredients) {
      return;
    }

    const searchParams = {
      searchedCocktail,
      selectedCategory,
      selectedIngredients,
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
        (!searchedCocktail || item.drink.includes(searchedCocktail))
    );

    setFiltredCocktails(filtred);

    console.log(filtred);
    console.log(searchParams);
  }, [searchedCocktail, selectedCategory, selectedIngredients]);

  const handleSelectCategory = evt => setSelectedCategory(evt.value);

  const handleSelectIngredients = evt => setSelectedIngredients(evt.value);

  const handleChange = evt => {
    setTextInput(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchedCocktail(textInput);
    // setTextInput('');
  };

  return (
    <div className={sass.wrapper}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter the text"
            value={textInput}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          ></input>
          <button type="submit"></button>
        </label>
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
