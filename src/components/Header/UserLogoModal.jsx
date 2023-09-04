import css from './UserLogoModal.module.scss';
import { useState, useEffect, useRef } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import UserInfoModal from './UserInfoModal';
import LogoutBtn from './LogoutBtn';

const UserLogoModal = ({ showModal, setShowModal }) => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const dropMenu = useRef(null);

  const handleEditProfileClick = () => {
    setShowInfoModal(!showInfoModal);
    setShowModal(false);
  };

  const handleToggleModal = async event => {
      console.log(showModal);

    if (
      dropMenu.current &&
      !dropMenu.current.contains(event.target) 
    ) {
      if (showModal) {
      await setShowModal(false);
      console.log(showModal);
      }
      return;
    }
  };

  // const handleToggleModal = event => {
  //   const isEventModalControlElement =
  //     event.target.dataset?.dropmenu || event.code === 'Escape';

  //   if (isEventModalControlElement) {
  //     console.log(event.target.dataset);
  //     return;
  //   }
  // };

  useEffect(() => {
    window.addEventListener('keydown', handleToggleModal);
    window.addEventListener('click', handleToggleModal);
    return () => {
      window.removeEventListener('keydown', handleToggleModal);
      window.removeEventListener('click', handleToggleModal);
    };
  });

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
        <UserInfoModal toggleModalShown={handleEditProfileClick} />
      )}
    </>
  );
};

export default UserLogoModal;
