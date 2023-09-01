import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { IoMdClose } from 'react-icons/io';
import { FiEdit2 } from 'react-icons/fi';
import css from './UserInfoModal.module.scss';
import Modal from 'components/Shared/Modal';

const UserInfoModal = ({ toggleModalShown }) => {
  const { name, avatarURL } = useSelector(({ user }) => user);
  const [inputValue, setInputValue] = useState(name);
  const [nameIsDisabled, setNameIsDisabled] = useState(true);
  const inputField = useRef(null);

  const handleCloseModal = () => {
    toggleModalShown();
  };

  const handleNameChange = e => {
    setInputValue(e.target.value);
  };

  const handleSaveChanges = async () => {
    await setNameIsDisabled(false);
    inputField.current.focus();
  };

  const handleEditName = async () => {
    await setNameIsDisabled(false);
    inputField.current.focus();
  };

  const handleAddIcon = () => {
    console.log('yes');
  };

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
        <div className={css.imgWrapper}>
          <img src={avatarURL} alt="User icon" className={css.img} />
          <button
            type="button"
            className={`${css.closeBtn} ${css.addImgBtn}`}
            onClick={handleAddIcon}
          >
            <FiEdit2 size={28} className={css.editIcon} />
          </button>
        </div>
        <div className={css.editWrapper}>
          <input
            className={css.input}
            value={inputValue}
            onChange={handleNameChange}
            placeholder={name}
            ref={inputField}
            disabled={nameIsDisabled}
          ></input>
          <button
            type="button"
            className={`${css.closeBtn} ${css.editBtn}`}
            onClick={handleEditName}
          >
            <FiEdit2 size={20} className={css.editIcon} />
          </button>
        </div>
        <button type="button" className={css.btn} onClick={handleSaveChanges}>
          Save changes
        </button>
      </div>
    </Modal>
  );
};

export default UserInfoModal;
