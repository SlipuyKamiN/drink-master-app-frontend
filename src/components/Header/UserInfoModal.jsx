import { IoMdClose } from 'react-icons/io';
import { useSelector } from 'react-redux';
import css from './UserInfoModal.module.scss';
import Modal from 'components/Shared/Modal';

const UserInfoModal = ({ toggleModalShown }) => {
  const { name, avatarURL } = useSelector(({ user }) => user);

  const handleCloseModal = () => {
    toggleModalShown();
  };
  const handleSaveChangesClick = () => {

  }

  return (
    <Modal>
      <div className={css.wrapper}>
        <button
          type="button"
          className={css.closeBtn}
          onClick={handleCloseModal}
        >
          <IoMdClose size={24} className={css.closeIcon} />
        </button>
        <img src={avatarURL} alt="User icon" className={css.img} />
        <input className={css.input} text={name} placeholder={name} disabled="true"></input>
        {/* <button
          type="button"
          className={`${css.btn} ${css.logoutBtn}`}
          onClick={handleSaveChangesClick}
          disabled={isDisabled}
        >
          Save changes
        </button> */}
      </div>
    </Modal>
  );
};

export default UserInfoModal;
