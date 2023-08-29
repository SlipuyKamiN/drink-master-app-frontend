 import { FiTrash2 } from 'react-icons/fi';
import css from "./RecipesItem.module.scss";
import placeholder from "../../images/thumb-placeholder-large.png";


const RecipesItem = ({id, description, drink, drinkThumb}) => {
/*
вставляю необхідні дані отримані з пропсу

в посилання на коктель: визначаю базовий url + id:коктелю
після чого відправляю на сторвнку коктелю

коли я натискаю на кнопку видалення, то викликається редюсер 
який відправляє на бекенд запит зі зміною статусу улюблений
*/
  const {REACT_APP_BASE_URL} = process.env;


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
        <p className={css.RecipesItemText}>{description}</p>

        <div className={css.wraperBottom}>
          <a className={css.RecipesItemLink}
            href={`${REACT_APP_BASE_URL}/api/recipes/${id}}`}>
            See recipe
          </a>
          <button
            className={css.RecipesItemButton}
            type="button">
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
