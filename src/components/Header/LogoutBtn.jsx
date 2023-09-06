import { useState } from 'react';
import css from './LogoutBtn.module.scss';
import UserLogoutModal from './UserLogoutModal';

const LogoutBtn = () => {
const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleSignoutClick = () => {
    setShowLogoutModal(prev => !prev);
  };

  return (
    <>
      <button
        type="button"
        className={css.btn}
        onClick={handleSignoutClick}
      >
        Log out
      </button>
      {showLogoutModal && <UserLogoutModal toggleModal={handleSignoutClick}/>}
    </>
  );
};

export default LogoutBtn;
