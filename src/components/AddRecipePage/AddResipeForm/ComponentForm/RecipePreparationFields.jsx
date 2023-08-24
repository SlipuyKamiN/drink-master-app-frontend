const RecipePreparationFields = () => {
  return (
    <div>
      <input type="text" name="title" id="" placeholder="Enter item title" />
      <br />
      <input
        type="text"
        name="description"
        id=""
        placeholder="Enter about recipe"
      />
      <input type="text" placeholder="Category" />
      <input type="text" placeholder="Glass" />
    </div>
  );
};

export default RecipePreparationFields;
