import { Link } from 'react-router-dom';

import MainPageTitle from 'components/Shared/MainPageTitle';

import sass from './AddYourCocktail.module.scss';

const AddYourCocktail = () => {
  return (
    <section className={sass.hero}>
      <div className={sass.wrapper}>
        <MainPageTitle name="Craft Your Perfect Drink with Drink Master"></MainPageTitle>
        <p className={sass.content}>
          Unlock your inner mixologist with Drink Master, your one-stop
          destination for exploring, crafting, and mastering the world's finest
          beverages.
        </p>
        <Link to="/add" className={sass.addPage}>
          Add recipe
        </Link>
      </div>
    </section>
  );
};

export default AddYourCocktail;
