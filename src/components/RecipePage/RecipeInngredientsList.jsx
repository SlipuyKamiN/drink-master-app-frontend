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
    <section>
      <Container>
        <div className={listWrapper}>
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
                  <p className={inngredientsName}>{item.title}</p>
                  <p className={inngredientsRatio}>{item.measure}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default RecipeInngredientsList;
