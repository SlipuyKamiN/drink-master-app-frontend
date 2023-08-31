import css from './UserLogo.module.scss';
import { useSelector } from 'react-redux';
import UserLogoModal from './UserLogoModal';
import { useState } from 'react';
import { ReactComponent as BurgerIcon } from '../../images/burger.svg';

const tempIcon =
  'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-10.jpg';

const UserLogo = () => {
  const { name, avatarURL } = useSelector(({ user }) => user);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
      <div className={css.userWrapper}>
        <button className={css.btn} type="button" onClick={handleShowModal}>
          <img
            src={avatarURL || tempIcon}
            alt="User icon"
            className={css.img}
          />
          <p className={css.text}>{name || 'No user'}</p>
        </button>
        {showModal && <UserLogoModal />}
      </div>
  );
};

export default UserLogo;
