import css from './UserLogoModal.module.scss';
import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { useLogoutMutation, useSigninMutation } from 'redux/authSlice';

const UserLogoModal = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [dispatch, {data, isLoading}] = useLogoutMutation();
  const [dispatch2, { data: userData, isLoading: isLogginIn }] = useSigninMutation();
    
  const handleSignupClick = () => {
    dispatch2({ email: 'alex@mail.com', password: 'Passw0rd' });//
  };

  const handleSignoutClick = () => {
    setIsDisabled(true);
    dispatch();
  }

  console.log('userData', userData, isLogginIn);

  return (
    <div className={css.modal}>
      <button type="button" className={css.btn} onClick={handleSignupClick}>
        <p>Edit profile</p>
        <FiEdit2 height="14px" width="14px" />
      </button>
      <button type="button" className={css.btn} onClick={handleSignoutClick} disabled={isDisabled}>
        Log out
      </button>
    </div>
  );
};

export default UserLogoModal;
