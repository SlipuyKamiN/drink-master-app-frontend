import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { IoMdClose } from 'react-icons/io';
import { FiEdit2 } from 'react-icons/fi';
import css from './UserInfoModal.module.scss';
import Modal from 'components/Shared/Modal';
import { ReactComponent as AddIcon } from '../../images/add photo.svg';
import { useUpdateUserMutation } from 'redux/authSlice';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import { notification } from 'components/Shared/notification';

const UserInfoModal = ({ toggleModal }) => {
  const { name, avatarURL } = useSelector(({ user }) => user);
  const [nameValue, setNameValue] = useState(name);
  const [nameIsDisabled, setNameIsDisabled] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [dispatch, { isLoading }] = useUpdateUserMutation();
  const inputField = useRef(null);

  const handleCloseModal = () => {
    toggleModal();
  };

  const handleNameChange = e => {
    setNameValue(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', nameValue);
    formData.append('avatar', selectedImage);
    dispatch(formData)
      .unwrap()
      .then(() => {
        notification('Your profile has been updated', 'success');
      })
      .catch(e => notification(e.data.message));
    toggleModal();
  };

  const handleEditName = () => {
    setNameIsDisabled(false);
    inputField.current.focus();
  };

  const handleChooseIcon = event => {
    setSelectedImage(event.target.files[0]);
  };

  return (
    <Modal toggleModal={toggleModal}>
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
            <button type="button" className={`${css.addImgBtn}`}>
              <AddIcon size={28} className={css.editIcon} />
            </button>
            <input
              name="name"
              className={css.chooseFile}
              type="file"
              accept="image/png, image/jpeg"
              disabled={isLoading}
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
              disabled={isLoading || nameIsDisabled}
            ></input>
            <button
              type="button"
              className={`${css.closeBtn} ${css.editBtn}`}
              onClick={handleEditName}
              disabled={isLoading}
            >
              <FiEdit2 size={20} className={css.editIcon} />
            </button>
          </div>
          <button type="submit" className={css.btn} disabled={isLoading}>
            {isLoading ? <LoadingSpinner size={30} /> : 'Save changes'}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default UserInfoModal;
