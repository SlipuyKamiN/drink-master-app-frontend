import { AiOutlineClose } from 'react-icons/ai';

// import { useGetMyRecipesQuery } from 'redux/myRecipesSlice';

import imageSvgSmall from '../../images/motivation-thumb-small.svg';
import imageSvgLarge from '../../images/motivation-thumb-large.svg';
import sass from './Motivation.module.scss';

const Motivation = ({ closeModal }) => {
  // const { data } = useGetMyRecipesQuery('');
  // console.log(data);

  return (
    <div className={sass.wrapperOne}>
      <div className={sass.thumb}>
        <img
          srcSet={`${imageSvgLarge} 268w, ${imageSvgSmall} 299w`}
          sizes="(min-width: 768px) 268px, (min-width: 375px) 299px, 100vw"
          src={imageSvgSmall}
          className={sass.image}
          alt="motivation"
        />
        <div className={sass.box}>
          <p className={sass.content}>
            Wow! You have added the first recipe to your favorites!
          </p>
          <button type="button" className={sass.btn} onClick={closeModal}>
            <AiOutlineClose className={sass.icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Motivation;
