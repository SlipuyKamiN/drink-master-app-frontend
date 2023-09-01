import css from './UserLogoModal.module.scss';
import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { notification } from 'components/Shared/notification';
import UserInfoModal from './UserInfoModal';
import LogoutBtn from './LogoutBtn';

const UserLogoModal = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);

  const handleEditProfileClick = () => {
    setShowInfoModal(!showInfoModal);
  };

  return (
    <>
      <div className={css.modal}>
        <button
          type="button"
          className={css.btn}
          onClick={handleEditProfileClick}
        >
          <p className={css.text}>Edit profile</p>
          <FiEdit2 height="14px" width="14px" />
        </button>
        <LogoutBtn />
      </div>
      {showInfoModal && (
        <UserInfoModal toggleModalShown={handleEditProfileClick} />
      )}
    </>
  );
};

export default UserLogoModal;
