import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';import css from "./Paginator.module.scss";

const Paginator = () => {

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
        <button
          className={css.PaginatorBtn}
          type="button">1
          </button>
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
