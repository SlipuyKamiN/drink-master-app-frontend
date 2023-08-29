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

const RecipePreparation = ({ instructions }) => {
  const splittedSentence = instructions.split('.');

  return (
    <Container>
      <h2 className={title}>Recipe Preparation</h2>
      <div className={info}>
        <div className={textWrapper}>
          <p className={description}></p>
          <ul className={preparationList}>
            {splittedSentence.map(
              item =>
                item?.length > 0 && (
                  <li className={preparationItem} key={item}>
                    {item}
                  </li>
                )
            )}
          </ul>
        </div>
        <img src={empty_bottles} className={img} alt={'Empty bottles'} />
      </div>
    </Container>
  );
};

export default RecipePreparation;
