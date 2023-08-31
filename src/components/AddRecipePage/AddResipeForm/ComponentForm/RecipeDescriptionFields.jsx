import Select from 'react-select';
import scss from './RecipeDescriptionFields.module.scss';
import { FiPlus } from 'react-icons/fi';
import {
  useGetCategoriesListQuery,
  useGetGlassListQuery,
} from 'redux/recipesSlice';

const RecipeDescriptionFields = ({ handleInputChange, value, setRequireError}) => {
  const { data: categoryList, isSuccess: isCategory } =
    useGetCategoriesListQuery('');
  const { data: glassList, isSuccess: isGlass } = useGetGlassListQuery('');

  

  const getOptionsForSelect = listOptions => {
    const options = listOptions.map(item => {
      return { value: item, label: item };
    });
    return options;
  };

  return (
    <div className={scss.form}>
      <div className={scss.form__wrapper}>
        {value.selectedImage ? (
          <img
            className={scss.img}
            src={URL.createObjectURL(value.selectedImage)}
            alt="Preview"
          />
        ) : (
            <div className={scss.file}>
            <input
              className={scss.file__input}
              type="file"
              name="drink-photo"
              accept="image/png, image/jpeg"
              onChange={handleInputChange.handleFileChange}
              required
            />
            setShowError
            <button className={scss.file__btn} type="button">
              <FiPlus size="28" color="#161F37" />
            </button>
            <p className={scss.file__text}>Add image</p>
            </div>
          
        )}
      </div>
      <div>
        <input
          className={scss.form__input}
          type="text"
          name="drink"
          id=""
          placeholder="Enter item title"
          onChange={handleInputChange.handleDrinkChange}
          value={value.drink}
          
          // required
        />
        {value.showError && value.drink === '' && setRequireError('drink')}
        <input
          className={scss.form__input}
          type="text"
          name="description"
          id=""
          onChange={handleInputChange.handleDescriptionChange}
          value={value.description}
          placeholder="Enter about recipe"
          // required
        />
       {value.showError && value.description === '' && setRequireError('description')}
          <Select
            classNamePrefix="select-description"
            placeholder=""
            onChange={handleInputChange.handleCategoryChange}
            defaultValue={value.category}
            options={isCategory ? getOptionsForSelect(categoryList) : []}
            // required
          />
        {value.showError && value.category === '' && setRequireError('category')}
        
          <Select
            classNamePrefix="select-description-glass"
            placeholder=""
            onChange={handleInputChange.handleGlassChange}
            defaultValue={value.glass}
            options={isGlass ? getOptionsForSelect(glassList) : []}
            // required
          />
       {value.showError && value.glass === '' && setRequireError('glass')}
      </div>
    </div>
  );
};

export default RecipeDescriptionFields;
