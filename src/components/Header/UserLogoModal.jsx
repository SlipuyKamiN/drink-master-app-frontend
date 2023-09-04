import css from './UserLogoModal.module.scss';
import { useState, useEffect, useRef } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import UserInfoModal from './UserInfoModal';
import LogoutBtn from './LogoutBtn';

const UserLogoModal = ({ showModal, setShowModal }) => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const dropMenu = useRef(null);

  const handleEditProfileClick = () => {
    setShowInfoModal(prev => !prev);
    setShowModal();
  };

  return (
    <>
      <div
        className={`${css.modal} ${showModal ? css.visible : css.hidden}`}
        ref={dropMenu} data-dropmenu
      >
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
        <UserInfoModal  toggleModal={handleEditProfileClick}/>
      )}
    </>
  );
};

export default UserLogoModal;
