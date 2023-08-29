//  import { FiTrash2 } from 'react-icons/fi';
// import css from "./RecipesItem.module.scss";
// import placeholder from "../../images/thumb-placeholder-large.png";


// const RecipesItem = ({id, description, drink, drinkThumb}) => {
// /*
// вставляю необхідні дані отримані з пропсу

// в посилання на коктель: визначаю базовий url + id:коктелю
// після чого відправляю на сторвнку коктелю

// коли я натискаю на кнопку видалення, то викликається редюсер 
// який відправляє на бекенд запит зі зміною статусу улюблений
// */
  
//   return <>
//     <li className={css.RecipesItem}>
//       <div className={css.wraperCard}>
//         <img
//           className={css.RecipesItemImg}
//           src={drinkThumb || placeholder}
//           alt={drink}
//         />
//         <h3 className={css.RecipesItemTitle}>{drink}</h3>
//         <h4 className={css.RecipesItemSubTitle}>ingridients</h4>
//         <p className={css.RecipesItemText}>{description}</p>

//         <div className={css.wraperBottom}>
//           <a className={css.RecipesItemLink}
//             href="https://github.com/Bad-Raider/goit-react-hw-08-phonebook/tree/main/src">
//             See recipe
//           </a>
//           <button
//             className={css.RecipesItemButton}
//             type="button">
//             <FiTrash2
//               className={css.RecipesItemIcon}
//               size={24}
//             />
//           </button>
//         </div>
//       </div>
//     </li>
//   </>
// };

// export default RecipesItem;
