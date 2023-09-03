import { useSearchParams } from 'react-router-dom';
import scss from './Paginator.module.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Paginator = ({ pagesQty }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || 1);
  const buttons = [];
  const buttonsRange = [
    currentPage - 3 < 0 ? 0 : currentPage - 3,
    currentPage + 2,
  ];

  for (let i = 0; i < pagesQty; i += 1) {
    buttons.push(i + 1);
  }

  const handleChangePage = value => {
    const params = Object.fromEntries([...searchParams]);

    setSearchParams({
      ...params,
      page: value,
    });
  };

  const handlePreviousBtn = () => {
    if (currentPage > 1) {
      handleChangePage(currentPage - 1);
    }
  };

  const handleNextBtn = () => {
    if (currentPage < pagesQty) {
      handleChangePage(currentPage + 1);
    }
  };

  return (
    <div className={scss.paginatorContainer}>
      <button
        className={scss.paginatorBtn}
        type="button"
        name="PreviousBtn"
        onClick={handlePreviousBtn}
        disabled={currentPage === 1}
      >
        <FiChevronLeft className={scss.arrow} size={27} />
      </button>
      <ul className={scss.paginatorList}>
        {buttons.slice(...buttonsRange).map(buttonNumber => (
          <button
            key={buttonNumber}
            className={`${scss.paginatorBtn} ${
              buttonNumber === currentPage ? scss.active : ''
            }`}
            onClick={() => handleChangePage(buttonNumber)}
            name={buttonNumber}
            type="button"
          >
            {buttonNumber}
          </button>
        ))}
      </ul>
      <button
        className={scss.paginatorBtn}
        type="button"
        name="NextBtn"
        onClick={handleNextBtn}
        disabled={currentPage === pagesQty}
      >
        <FiChevronRight className={scss.arrow} size={27} />
      </button>
    </div>
  );
};

export default Paginator;
