import Container from 'components/Shared/Container';
import cocktail from 'images/cocktail.jpg';
import sass from './RecipePreparation.module.scss';

const {
  title,
  info,
  textWrapper,
  description,
  preparationList,
  preparationItem,
  img,
} = sass;

const RecipePreparation = ({ instructions }) => {
  const splittedSentence =
    typeof instructions === 'string' ? instructions.split('.') : instructions;

  return (
    <section>
      <Container>
        <h2 className={title}>Recipe Preparation</h2>
        <div className={info}>
          <div className={textWrapper}>
            <p className={description}></p>
            <ul className={preparationList}>
              {splittedSentence.map(
                (item, index) =>
                  item?.length > 0 && (
                    <li className={preparationItem} key={item + index}>
                      {item}
                    </li>
                  )
              )}
            </ul>
          </div>
          <img
            src={cocktail}
            className={img}
            alt={'A person pouring a drink into a glass'}
          />
        </div>
      </Container>
    </section>
  );
};

export default RecipePreparation;
