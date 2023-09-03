import scss from './ItemNotCocktails.module.scss';
import heroCocktailImage1x from '../../images/no-content-cocktail.png';
import heroCocktailImage2x from '../../images/no-content-cocktail@2x.png';

const ItemNotCocktails = ({ title }) => {
  return (
    <section className={scss.wraper}>
      <img
        srcSet={`${heroCocktailImage1x} 1x, ${heroCocktailImage2x} 2x`}
        src={heroCocktailImage1x}
        alt="no-content-cocktail"
      />
      <p className={scss.text}>{title}</p>
    </section>
  );
};

export default ItemNotCocktails;
