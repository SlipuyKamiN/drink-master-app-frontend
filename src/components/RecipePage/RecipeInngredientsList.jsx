import Container from 'components/Shared/Container';
import sass from './RecipeInngredientsList.module.scss';
import placeholder from '../../images/thumb-placeholder-large.png';

const {
  listWrapper,
  title,
  inngredientsList,
  inngredientsItem,
  inngredientsInfo,
  inngredientsImgWrapper,
  inngredientsImg,
  inngredientsName,
  inngredientsRatio,
} = sass;

const RecipeInngredientsList = ({ ingredients }) => {
  return (
    <section className={listWrapper}>
      <Container>
        <h2 className={title}>Ingredients</h2>
        <ul className={inngredientsList}>
          {ingredients?.map(item => (
            <li className={inngredientsItem} key={item._id}>
              <div className={inngredientsImgWrapper}>
                <img
                  className={inngredientsImg}
                  src={item.ingredientThumb ?? placeholder}
                  alt="Ingredient"
                />
              </div>
              <div className={inngredientsInfo}>
                <h3 className={inngredientsName}>{item.title}</h3>
                <p className={inngredientsRatio}>{item.measure}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default RecipeInngredientsList;
