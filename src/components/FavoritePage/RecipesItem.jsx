 import { FiTrash2 } from 'react-icons/fi';
import css from "./RecipesItem.module.scss";
import placeholder from "../../images/thumb-placeholder-large.png";

// import resepies from '../../DB/cocktails.json';
// const useFetchAllQuery = () => resepies;

const RecipesItem = () => {
  // const recipies = useFetchAllQuery();
  // console.log(recipies);

  
  return <>
    <li className={css.RecipesItem}>
      RecipesItem
      <div className={css.wraperCard}>
        <img
          className={css.RecipesItemImg}
          src={placeholder}
          alt="glass"
        />
        <h3 className={css.RecipesItemTitle}>Title</h3>
        <h4 className={css.RecipesItemSubTitle}>ingridients</h4>
        <p className={css.RecipesItemText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque labore quaerat voluptatum laboriosam quam, itaque blanditiis dignissimos quasi, quia soluta pariatur quae totam sequi officia quis natus consequuntur? Architecto.</p>

        <div className={css.wraperBottom}>
          <a className={css.RecipesItemLink}
            href="https://github.com/Bad-Raider/goit-react-hw-08-phonebook/tree/main/src">
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
