import Select from 'react-select';
import scss from './RecipeDescriptionFields.module.scss';
import { FiPlus } from 'react-icons/fi';
const RecipeDescriptionFields = ({ handleInputChange, value }) => {
  const options1 = [
    { value: 'cocktail', label: 'Cocktail' },
    { value: 'csnake', label: 'Cnake' },
    { value: 'beer', label: 'Beer' },
  ];
  const options2 = [
    { value: 'cocktail glass', label: 'Cocktail glass' },
    { value: 'csnake glass', label: 'Cnake glass' },
    { value: 'beer glass', label: 'Beer glass' },
  ];

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
        <Select
          placeholder="Category"
          onChange={handleInputChange.handleCategoryChange}
          defaultValue={value.category}
          options={options1}
          required
        />
        <Select
          className={scss.input}
          placeholder="Glass"
          onChange={handleInputChange.handleGlassChange}
          defaultValue={value.glass}
          options={options2}
          required
        />
      </div>
    </div>
  );
};

export default RecipeDescriptionFields;
