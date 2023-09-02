import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { IoMdClose } from 'react-icons/io';
import { FiEdit2 } from 'react-icons/fi';
import css from './UserInfoModal.module.scss';
import Modal from 'components/Shared/Modal';
import { ReactComponent as AddIcon } from '../../images/add photo.svg';
import { setUser } from 'redux/userSlice';

const UserInfoModal = ({ toggleModalShown }) => {
  const { name, avatarURL } = useSelector(({ user }) => user);
  const [nameValue, setNameValue] = useState(name);
  const [nameIsDisabled, setNameIsDisabled] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [dispatch] = setUser();
  const inputField = useRef(null);

  const handleCloseModal = () => {
    toggleModalShown();
  };

  const handleNameChange = e => {
    setNameValue(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(nameValue);
    console.log(selectedImage);
    const formData = new FormData();
    formData.append('name', nameValue);
    formData.append('avatarURL', selectedImage);
    console.log(formData);
    // dispatch(formData);
  };

  const handleEditName = async () => {
    await setNameIsDisabled(false);
    inputField.current.focus();
  };

  const handleChooseIcon = event => {
    setSelectedImage(event.target.files[0]);
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
        <form onSubmit={handleFormSubmit}>
          <div className={css.imgWrapper}>
            <img
              src={
                selectedImage ? URL.createObjectURL(selectedImage) : avatarURL
              }
              alt="User icon"
              className={css.img}
            />
            <button
              type="button"
              className={`${css.addImgBtn}`}
              onClick={handleChooseIcon}
            >
              <AddIcon size={28} className={css.editIcon} />
            </button>
            <input
              name="name"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleChooseIcon}
            />
          </div>
          <div className={css.editWrapper}>
            <input
              className={css.input}
              value={nameValue}
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
          <button type="submit" className={css.btn}>
            Save changes
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default UserInfoModal;
