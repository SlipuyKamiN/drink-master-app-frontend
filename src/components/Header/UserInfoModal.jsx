import { IoMdClose } from 'react-icons/io';
import { useSelector } from 'react-redux';
import css from './UserInfoModal.module.scss';
import Modal from 'components/Shared/Modal';

const UserInfoModal = () => {
  const { name, avatarURL } = useSelector(({ user }) => user);
  return (
    <Modal>
      <div  className={css.wrapper}>
        <button type="button" className={css.closeBtn}>
          <IoMdClose size={24} className={css.closeIcon} />
        </button>
        <img
            src={avatarURL}
            alt="User icon"
            className={css.img}
          />
          <input 
          value={name}
          disabled="true"
          ></input>
      </div>
    </Modal>
  );
};

export default UserInfoModal;
