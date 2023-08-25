import Select from 'react-select';

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
    <>
      {value.selectedImage ? (
        <img
          src={URL.createObjectURL(value.selectedImage)}
          alt="Preview"
          width="100px"
          height="100px"
        />
      ) : (
        <input
          type="file"
          name="drink-photo"
          accept="image/png, image/jpeg"
          onChange={handleInputChange.handleFileChange}
        />
      )}
      <br />
      <br />
      <input
        type="text"
        name="drink"
        id=""
        placeholder="Enter item title"
        onChange={handleInputChange.handleDrinkChange}
        value={value.drink}
      />
      <br />
      <br />
      <input
        type="text"
        name="description"
        id=""
        onChange={handleInputChange.handleDescriptionChange}
        value={value.description}
        placeholder="Enter about recipe"
      />
      <br />
      <br />
      <Select
        placeholder="Category"
        onChange={handleInputChange.handleCategoryChange}
        value={value.category}
        options={options1}
      />
      <br />
      <Select
        placeholder="Glass"
        onChange={handleInputChange.handleGlassChange}
        value={value.glass}
        options={options2}
      />
    </>
  );
};

export default RecipeDescriptionFields;
