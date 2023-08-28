import Container from 'components/Shared/Container';
import sass from './RecipeInngredientsList.module.scss';

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

const RecipeInngredientsList = () => {
  return (
    <Container>
      <div className={listWrapper}>
        <h2 className={title}>Ingredients</h2>
        <ul className={inngredientsList}>
          <li className={inngredientsItem}>
            <div className={inngredientsImgWrapper}>
              <img className={inngredientsImg} alt="Ingredient" />
            </div>
            <div className={inngredientsInfo}>
              <p className={inngredientsName}>Lime</p>
              <p className={inngredientsRatio}>1 cl</p>
            </div>
          </li>
          <li className={inngredientsItem}>
            <div className={inngredientsImgWrapper}>
              <img className={inngredientsImg} alt="Ingredient" />
            </div>
            <div className={inngredientsInfo}>
              <p className={inngredientsName}>Lime</p>
              <p className={inngredientsRatio}>1 cl</p>
            </div>
          </li>
          <li className={inngredientsItem}>
            <div className={inngredientsImgWrapper}>
              <img className={inngredientsImg} alt="Ingredient" />
            </div>
            <div className={inngredientsInfo}>
              <p className={inngredientsName}>Lime</p>
              <p className={inngredientsRatio}>1 cl</p>
            </div>
          </li>
          <li className={inngredientsItem}>
            <div className={inngredientsImgWrapper}>
              <img className={inngredientsImg} alt="Ingredient" />
            </div>
            <div className={inngredientsInfo}>
              <p className={inngredientsName}>Lime</p>
              <p className={inngredientsRatio}>1 cl</p>
            </div>
          </li>
          <li className={inngredientsItem}>
            <div className={inngredientsImgWrapper}>
              <img className={inngredientsImg} alt="Ingredient" />
            </div>
            <div className={inngredientsInfo}>
              <p className={inngredientsName}>Lime</p>
              <p className={inngredientsRatio}>1 cl</p>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default RecipeInngredientsList;
