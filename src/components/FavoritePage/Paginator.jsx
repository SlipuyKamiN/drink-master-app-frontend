import { useSearchParams } from 'react-router-dom';
import css from './Paginator.module.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Paginator = ({ pagesQty }) => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

  const handleChangePage = page => {
    setSearchParams({ page });
  };

  const buttons = [];

  for (let i = 0; i < pagesQty; i += 1) {
    buttons.push(i + 1);
  }

  return (
    <div className={css.PaginatorContainer}>
      <button className={css.PaginatorBtn} type="button" name="PreviousBtn">
        <FiChevronLeft className={css.arrow} size={27} />
      </button>
      <ul className={css.PaginatorList}>
        {buttons.map(buttonNumber => (
          <button
            key={buttonNumber}
            className={css.PaginatorBtn}
            onClick={() => handleChangePage(buttonNumber)}
            name={buttonNumber}
            type="button"
          >
            {buttonNumber}
          </button>
        ))}
      </ul>
      <button className={css.PaginatorBtn} type="button" name="NextBtn">
        <FiChevronRight className={css.arrow} size={27} />
      </button>
    </div>
  );
};

export default Paginator;
