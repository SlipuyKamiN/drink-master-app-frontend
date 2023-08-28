import Container from 'components/Shared/Container';
import empty_bottles from '../../images/empty_bottles.jpg';
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

const RecipePreparation = () => {
  return (
    <Container>
      <h2 className={title}>Recipe Preparation</h2>
      <div className={info}>
        <div className={textWrapper}>
          <p className={description}>
            Let’s forget about the second half of this drink’s name for a
            moment: It doesn’t remotely resemble a classic Martini. As for the
            first part, it's said by some that its creator, bartender Douglas
            Ankrah, thought it was what a porn star would order; other stories
            hold that he was inspired by the smell of a stripper's perfume.
          </p>
          <ul className={preparationList}>
            <li className={preparationItem}>
              Add all ingredients except sparkling wine into a shaker with ice
              and shake vigorously until well-chilled.
            </li>
            <li className={preparationItem}>
              Strain into a chilled coupe glass.
            </li>
            <li className={preparationItem}>
              Garnish with a passion fruit half.
            </li>
            <li className={preparationItem}>
              Serve with a sparkling wine sidecar (on the side).
            </li>
          </ul>
        </div>
        <img src={empty_bottles} className={img} alt={'Empty bottles'} />
      </div>
    </Container>
  );
};

export default RecipePreparation;
