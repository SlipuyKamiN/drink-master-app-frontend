import Select from 'react-select';
import scss from './RecipeDescriptionFields.module.scss';
import { FiPlus } from 'react-icons/fi';
import {
  useGetCategoriesListQuery,
  useGetGlassListQuery,
} from 'redux/recipesSlice';

const RecipeDescriptionFields = ({ handleInputChange: {handleFileChange,
  handleDrinkChange,
  handleCategoryChange,
  handleDescriptionChange,
  handleGlassChange,}, value: {selectedImage, drink, description, category, glass, isShowError}}) => {
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
        {selectedImage ? (
          <img
            className={scss.img}
            src={URL.createObjectURL(selectedImage)}
            alt="Preview"
          />
        ) : (
            <div className={scss.file}>
            <input
              className={scss.file__input}
              type="file"
              name="drink-photo"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
            />
            <button className={scss.file__btn} type="button">
              <FiPlus size="28" color="#161F37" />
            </button>
            <p className={scss.file__text}>Add image</p>
            {isShowError && selectedImage === null && <p className={`${scss.error} ${scss.error__img}`}>The field image must be filled</p>}
            </div>
          
        )}
      </div>
      <div className={scss.category}>
        <input
          className={scss.form__input}
          type="text"
          name="drink"
          id=""
          placeholder="Enter item title"
          onChange={handleDrinkChange}
          value={drink}
        />
         {isShowError && drink === '' && <p className={`${scss.error} ${scss.error__drink}` }>The field drink must be filled</p>}
        <input
          className={scss.form__input}
          type="text"
          name="description"
          id=""
          onChange={handleDescriptionChange}
          value={description}
          placeholder="Enter about recipe"
        />
       {isShowError && description === '' && <p className={`${scss.error} ${scss.error__description}` }>The field description must be filled</p>}
          <Select
            classNamePrefix="select-description"
            placeholder=""
            onChange={handleCategoryChange}
            defaultValue={category}
            options={isCategory ? getOptionsForSelect(categoryList) : []}
          />
        {isShowError && category === '' && <p className={`${scss.error} ${scss.error__category}` }>The field category must be filled</p>}
        
          <Select
            classNamePrefix="select-description-glass"
            placeholder=""
            onChange={handleGlassChange}
            defaultValue={glass}
            options={isGlass ? getOptionsForSelect(glassList) : []}
          />
       {isShowError && glass === '' && <p className={`${scss.error} ${scss.error__glass}` }>The field glass must be filled</p>}
      </div>
    </div>
  );
};

export default RecipeDescriptionFields;
