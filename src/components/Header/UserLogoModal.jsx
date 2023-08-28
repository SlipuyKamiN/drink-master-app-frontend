import css from './UserLogoModal.module.scss';
import { FiEdit2 } from "react-icons/fi";

const UserLogoModal = () => {
  return (
    <div className={css.modal}>
       <button type="button" className={css.btn}>
        <p>Edit profile</p>
        <FiEdit2 height="14px" width="14px"/>
      </button>
      <button type="button" className={css.btn}>
      Log out
      </button>
    </div>
  );
};

export default UserLogoModal;
