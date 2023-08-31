import css from './UserLogoModal.module.scss';
import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { useLogoutMutation } from 'redux/authSlice';

const UserLogoModal = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [dispatch] = useLogoutMutation();
      
  const handleEditProfileClick = () => {
  };

  const handleSignoutClick = () => {
    setIsDisabled(true);
    dispatch();
  }

 return (
    <div className={css.modal}>
      <button type="button" className={css.btn} onClick={handleEditProfileClick}>
        <p className={css.text}>Edit profile</p>
        <FiEdit2 height="14px" width="14px" />
      </button>
      <button type="button" className={`${css.btn} ${css.logoutBtn}`} onClick={handleSignoutClick} disabled={isDisabled}>
        Log out
      </button>
    </div>
  );
};

export default UserLogoModal;
