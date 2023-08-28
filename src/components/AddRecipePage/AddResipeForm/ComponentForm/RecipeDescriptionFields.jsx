import Select from 'react-select';
import scss from './RecipeDescriptionFields.module.scss';
import { FiPlus } from 'react-icons/fi';
import {
  useGetCategoriesListQuery,
  useGetGlassListQuery,
} from 'redux/recipesSlice';

const RecipeDescriptionFields = ({ handleInputChange, value, user }) => {
  // const [dispatch, { data: user }] = useSigninMutation();

  const { data: categoryList, isSuccess: isCategory } =
    useGetCategoriesListQuery('', {
      skip: !user,
    });
  const { data: glassList, isSuccess: isGlass } = useGetGlassListQuery('', {
    skip: !user,
  });

  // useEffect(() => {
  //   dispatch({ email: 'marias@gmail.com', password: 'Qwerty123' });
  // }, []);

  const getOptionsForSelect = listOptions => {
    const options = listOptions.map(item => {
      return { value: item, label: item };
    });
    return options;
  };

  return (
    <div className={scss.wrapper}>
      <div className={scss.wrapper__img}>
        {value.selectedImage ? (
          <img
            className={scss.img}
            src={URL.createObjectURL(value.selectedImage)}
            alt="Preview"
          />
        ) : (
          <>
            {' '}
            <input
              className={scss.input__file}
              type="file"
              name="drink-photo"
              accept="image/png, image/jpeg"
              onChange={handleInputChange.handleFileChange}
              required
            />
            <button className={scss.btn} type="button">
              <FiPlus size="28" color="#161F37" />
            </button>
            <p className={scss.text}>Add image</p>
          </>
        )}
      </div>
      <div>
        <input
          className={scss.input}
          type="text"
          name="drink"
          id=""
          placeholder="Enter item title"
          onChange={handleInputChange.handleDrinkChange}
          value={value.drink}
          required
        />
        <input
          className={scss.input}
          type="text"
          name="description"
          id=""
          onChange={handleInputChange.handleDescriptionChange}
          value={value.description}
          placeholder="Enter about recipe"
          required
        />
        <label className={scss.recipeDescription__label}>
          <Select
            classNamePrefix="select-description"
            placeholder=""
            onChange={handleInputChange.handleCategoryChange}
            defaultValue={value.category}
            options={isCategory ? getOptionsForSelect(categoryList) : []}
            required
          />
        </label>
        <label className={scss.recipeDescription__label}>
          <Select
            classNamePrefix="select-description-glass"
            placeholder=""
            onChange={handleInputChange.handleGlassChange}
            defaultValue={value.glass}
            options={isGlass ? getOptionsForSelect(glassList) : []}
            required
          />
        </label>
      </div>
    </div>
  );
};

export default RecipeDescriptionFields;
