import { FiTrash2 } from 'react-icons/fi';
import scss from './RecipesItem.module.scss';
import placeholder from '../../images/thumb-placeholder-large.png';
import { Link, } from 'react-router-dom';


const RecipesItem = ({
  id,
  description,
  drink,
  drinkThumb,
  removeFavorite,
})=> {

  return (
    <>
      <li className={scss.RecipesItem}>
        <div className={scss.wraperCard}>
          <img
            className={scss.RecipesItemImg}
            src={drinkThumb || placeholder}
            alt={drink}
          />
          <h3 className={scss.RecipesItemTitle}>{drink}</h3>
          <h4 className={scss.RecipesItemSubTitle}>ingridients</h4>
          <p className={scss.RecipesItemText}>{description || 'descr'}</p>

          <div className={scss.wraperBottom}>
            <Link
              className={scss.RecipesItemLink}
              to={`/recipe/${id}`}
              target="_blank"
              rel="noreferrer"
            >
              See recipe
            </Link>
            <button
              className={scss.RecipesItemButton}
              type="button"
              onClick={() => removeFavorite(id)}
            >
              <FiTrash2 className={scss.RecipesItemIcon} size={24} />
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default RecipesItem;
