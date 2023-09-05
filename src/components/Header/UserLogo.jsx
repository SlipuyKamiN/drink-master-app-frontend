import css from './UserLogo.module.scss';
import { useSelector } from 'react-redux';
import UserLogoModal from './UserLogoModal';
import { useState } from 'react';

const UserLogo = () => {
  const { name, avatarURL } = useSelector(({ user }) => user);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = async (event) => {
    document.activeElement.blur();
    // console.log(event.target)
    // if (!showModal) {
    //   await setShowModal(true);
    // }
    // else {
    //   await setShowModal(false);
    // }
    setShowModal(prev => !prev)
  };

  return (
    <div className={css.userWrapper}>
      <button
        className={css.btn}
        type="button"
        onClick={handleShowModal}
        data-dropbutton
      >
        <img
          src={avatarURL}
          alt="User icon"
          className={css.img}
          data-dropbutton
        />
        <p className={css.text} data-dropbutton>
          {name}
        </p>
      </button>
      <UserLogoModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default UserLogo;
