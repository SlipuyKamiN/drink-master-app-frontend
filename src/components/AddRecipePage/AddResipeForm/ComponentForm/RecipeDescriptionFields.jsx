import Select from 'react-select';

const RecipeDescriptionFields = () => {
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
      <input type="file" name="drink" accept="image/png, image/jpeg" />
      <br />
      <input type="text" name="title" id="" placeholder="Enter item title" />
      <br />
      <input
        type="text"
        name="description"
        id=""
        placeholder="Enter about recipe"
      />
      <Select options={options1} placeholder="Category" />
      <Select options={options2} placeholder="Glass" />
    </>
  );
};

export default RecipeDescriptionFields;
