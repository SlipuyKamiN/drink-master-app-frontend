import { useSearchParams } from 'react-router-dom';
import scss from './Paginator.module.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Paginator = ({ pagesQty }) => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const currentPage = parseInt(searchParams.get('page'));
  const buttons = [];
  
  for (let i = 0; i < pagesQty; i += 1) {
    buttons.push(i + 1);
  }


  const handleChangePage = page => {
    setSearchParams({ page });

  };

  const handlePreviousBtn = () => {
    if (currentPage > 1) {
      setSearchParams({ page: currentPage - 1 });
    };
  };

  const handleNextBtn = () => {
    if (currentPage < pagesQty) {
      setSearchParams({ page: currentPage + 1 });
    };
  }; 
  
  return <div className={scss.paginatorContainer}>
      <button
        className={scss.paginatorBtn}
        type="button"
        name="PreviousBtn"
        onClick={() => handlePreviousBtn()}
        disabled={ currentPage === 1}
      >
        <FiChevronLeft className={scss.arrow} size={27} />
      </button>
      <ul className={scss.paginatorList}>
        {buttons.map(buttonNumber => (
            <button
              key={buttonNumber}
              className={`${scss.paginatorBtn} ${buttonNumber === currentPage ? scss.active : ''}`}
              onClick={() => handleChangePage(buttonNumber)}
              name={buttonNumber}
              type="button"
            >
              {buttonNumber}
            </button>
          ))
        }
      </ul>
      <button
        className={scss.PaginatorBtn}
        type="button" name="NextBtn"
        onClick={() => handleNextBtn()}
        disabled={ currentPage === pagesQty}
      >
        <FiChevronRight className={scss.arrow} size={27} />
      </button>
    </div>
};

export default Paginator;
