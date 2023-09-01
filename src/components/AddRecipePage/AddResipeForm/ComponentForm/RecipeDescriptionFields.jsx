import Select from 'react-select';
import scss from './RecipeDescriptionFields.module.scss';
import { FiPlus } from 'react-icons/fi';
import {
  useGetCategoriesListQuery,
  useGetGlassListQuery,
} from 'redux/recipesSlice';

const RecipeDescriptionFields = ({ handleInputChange, value}) => {
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
            />
            <button className={scss.file__btn} type="button">
              <FiPlus size="28" color="#161F37" />
            </button>
            <p className={scss.file__text}>Add image</p>
            {value.isShowError && value.selectedImage === null && <p className={`${scss.error} ${scss.error__img}`}>The field image must be filled</p>}
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
          onChange={handleInputChange.handleDrinkChange}
          value={value.drink}
        />
         {value.isShowError && value.drink === '' && <p className={`${scss.error} ${scss.error__drink}` }>The field drink must be filled</p>}
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
       {value.isShowError && value.description === '' && <p className={`${scss.error} ${scss.error__description}` }>The field description must be filled</p>}
          <Select
            classNamePrefix="select-description"
            placeholder=""
            onChange={handleInputChange.handleCategoryChange}
            defaultValue={value.category}
            options={isCategory ? getOptionsForSelect(categoryList) : []}
            // required
          />
        {value.isShowError && value.category === '' && <p className={`${scss.error} ${scss.error__category}` }>The field category must be filled</p>}
        
          <Select
            classNamePrefix="select-description-glass"
            placeholder=""
            onChange={handleInputChange.handleGlassChange}
            defaultValue={value.glass}
            options={isGlass ? getOptionsForSelect(glassList) : []}
            // required
          />
       {value.isShowError && value.glass === '' && <p className={`${scss.error} ${scss.error__glass}` }>The field glass must be filled</p>}
      </div>
    </div>
  );
};

export default RecipeDescriptionFields;
