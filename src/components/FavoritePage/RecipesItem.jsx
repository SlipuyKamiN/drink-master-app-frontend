import { FiTrash2 } from 'react-icons/fi';
import css from "./RecipesItem.module.scss";
import placeholder from "../../images/thumb-placeholder-large.png";
import { useToggleFavoriteMutation } from 'redux/recipesSlice';

const RecipesItem = ({id, description, drink, drinkThumb}) => {

  
  const {REACT_APP_BASE_URL} = process.env;
  const [toggleFavoriteMutation, { isLoading }] = useToggleFavoriteMutation();

  const handleToggleFavorite = async () => {
    try {
      await toggleFavoriteMutation(id);
    } catch (error) {
      console.error('Error toggle', error);
    }
  };

  return <>
    <li className={css.RecipesItem}>
      <div className={css.wraperCard}>
        <img
          className={css.RecipesItemImg}
          src={drinkThumb || placeholder}
          alt={drink}
        />
        <h3 className={css.RecipesItemTitle}>{drink}</h3>
        <h4 className={css.RecipesItemSubTitle}>ingridients</h4>
        <p className={css.RecipesItemText}>{description || 'descr'}</p>

        <div className={css.wraperBottom}>
          <a className={css.RecipesItemLink}
            href={`${REACT_APP_BASE_URL}/api/recipes/${id}}`}
            target="_blank"
            rel="noreferrer"
          >
            See recipe
          </a>
          <button
            className={css.RecipesItemButton}
            type="button"
            onClick={handleToggleFavorite}
            disabled={isLoading}
          >
            <FiTrash2
              className={css.RecipesItemIcon}
              size={24}
            />
          </button>
        </div>
      </div>
    </li>
  </>
};

export default RecipesItem;
