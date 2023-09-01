import css from './UserLogoModal.module.scss';
import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { useLogoutMutation } from 'redux/authSlice';
import { notification } from 'components/Shared/notification';
import UserInfoModal from './UserInfoModal';


const UserLogoModal = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [dispatch] = useLogoutMutation();

  const handleEditProfileClick = () => {
    setShowInfoModal(!showInfoModal);
  };

  const handleSignoutClick = () => {
    setIsDisabled(true);
    dispatch();
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
        <button
          type="button"
          className={`${css.btn} ${css.logoutBtn}`}
          onClick={handleSignoutClick}
          disabled={isDisabled}
        >
          Log out
        </button>
      </div>
      {showInfoModal && <UserInfoModal toggleModalShown={handleEditProfileClick}/>}
    </>
  );
};

export default UserLogoModal;
