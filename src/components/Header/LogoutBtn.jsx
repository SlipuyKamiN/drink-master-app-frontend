import { useState } from 'react';
import { useLogoutMutation } from 'redux/authSlice';
import css from './LogoutBtn.module.scss';
import LoadingSpinner from 'components/Shared/LoadingSpinner';

const LogoutBtn = () => {
  const [dispatch, { isLoading }] = useLogoutMutation();
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSignoutClick = () => {
    setIsDisabled(true);
    dispatch();
  };

  return (
    <>
      <button
        type="button"
        className={css.btn}
        onClick={handleSignoutClick}
        disabled={isLoading || isDisabled}
      >
        {isLoading ? <LoadingSpinner size={30} /> : 'Log out'}
      </button>
    </>
  );
};

export default LogoutBtn;
