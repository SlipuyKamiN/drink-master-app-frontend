import Modal from 'components/Shared/Modal';
import css from './UserLogoutModal.module.scss';
import { useLogoutMutation } from 'redux/authSlice';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import { IoMdClose } from 'react-icons/io';

const UserLogoModal = ({ toggleModal }) => {
  const [dispatch, { isLoading }] = useLogoutMutation();

  const handleLogOut = () => {
    dispatch();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <div className={css.wrapper}>
        <button type="button" className={css.closeBtn} onClick={toggleModal}>
          <IoMdClose size={24} className={css.closeIcon} />
        </button>
        <p className={css.text}>Are you sure you want to log out?</p>
        <button type="button" className={css.btn} onClick={handleLogOut} disabled={isLoading}>
          Log out
        </button>
        <button
          type="button"
          className={`${css.btn} ${css.btnBlack}`}
          onClick={toggleModal}
          disabled={isLoading}
        >
          Cancel
        </button>
        <div className={css.loader}>
          {isLoading && <LoadingSpinner size={40} />}
        </div>
      </div>
    </Modal>
  );
};

export default UserLogoModal;
