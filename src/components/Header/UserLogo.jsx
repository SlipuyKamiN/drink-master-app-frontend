import css from './UserLogo.module.scss';
import { useSelector } from 'react-redux';
import UserLogoModal from './UserLogoModal';


const tempIcon = 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-10.jpg'

const UserLogo = () => {
  const { name, avatarURL } = useSelector(({ user }) => user);
  console.log(name, avatarURL);
  return (
    <div className={css.userWrapper}>
    <button className={css.btn} type="button">
      <img src={avatarURL || tempIcon} alt="User icon" className={css.img}/>
      <p className={css.text}>{name || "No user"}</p>
    </button>
    <UserLogoModal/>
    </div>
  );
};

export default UserLogo;
