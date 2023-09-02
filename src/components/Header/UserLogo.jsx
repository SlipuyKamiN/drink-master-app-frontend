import css from './UserLogo.module.scss';
import { useSelector } from 'react-redux';
import UserLogoModal from './UserLogoModal';
import { useState } from 'react';

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
            src={avatarURL}
            alt="User icon"
            className={css.img}
          />
          <p className={css.text}>{name}</p>
        </button>
        {showModal && <UserLogoModal />}
      </div>
  );
};

export default UserLogo;
