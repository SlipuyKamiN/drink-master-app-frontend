import { AiOutlineClose } from 'react-icons/ai';

import imageSvgSmall from '../../images/motivation-thumb-small.svg';
import imageSvgLarge from '../../images/motivation-thumb-large.svg';
import sass from './MotivatingModal.module.scss';

const MotivatingModal = ({ title, style, toggleModal }) => {
  return (
    <div className={style}>
      <div className={sass.thumb}>
        <img
          srcSet={`${imageSvgLarge} 268w, ${imageSvgSmall} 299w`}
          sizes="(min-width: 768px) 268px, (min-width: 375px) 299px, 100vw"
          src={imageSvgSmall}
          className={sass.image}
          alt="motivation"
        />

        <p className={sass.content}>{title}</p>
        <button type="button" className={sass.btn} onClick={toggleModal}>
          <AiOutlineClose className={sass.icon} />
        </button>
      </div>
    </div>
  );
};

export default MotivatingModal;
