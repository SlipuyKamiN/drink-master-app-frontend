import css from "./Paginator.module.scss";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


const Paginator = ({ totalHits, onChange }) => {

  console.log("totalHits:", totalHits);
  let litit = 8;
  const numberOfButtons = Math.ceil(totalHits / litit);
  const numbersArray = Array.from({ length: numberOfButtons }, (_, index) => index + 1);

  const handleBtnPaginations = (num) => {
    onChange(num)
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
             onClick={()=>handleBtnPaginations(buttonNumber)}
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
