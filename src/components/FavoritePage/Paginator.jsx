import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import css from "./Paginator.module.scss";

const Paginator = ({totalHits}) => {

  console.log("totalHits:", totalHits);
  const numberOfButtons = Math.ceil(25 / 8);
  const numbersArray = Array.from({ length: numberOfButtons }, (_, index) => index + 1);

  console.log("numberOfButtons", numberOfButtons);
  console.log('numbersArray', numbersArray);

  const handleBtnPaginations = () => {
    
  };

  return (
    <div className={css.PaginatorContainer}>
      <button
        className={ css.PaginatorBtn}
        type="button"
        name="PreviousBtn"
      >
        <FiChevronLeft
          className={css.arrow}
          size={27}
        />
      </button>
      <ul className={css.PaginatorList}>
         {numbersArray.map((buttonNumber) => (
           <button
             className={css.PaginatorBtn}
             onClick={handleBtnPaginations}
            name={buttonNumber}
            type="button"
          >
            {buttonNumber}
          </button>
        ))}
      </ul>
      <button
        className={css.PaginatorBtn}
        type="button"
        name="NextBtn"
      >
        <FiChevronRight
          className={css.arrow}
          size={27}
        />
      </button>
    </div>
  )
};

export default Paginator;
