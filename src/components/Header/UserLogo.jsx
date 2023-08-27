import css from "./UserLogo.module.scss";

const UserLogo = () => {
  return (
    <button className={css.btn} type="button">
<p className={css.text}>{user.name}</p>
    </button>
  );
};

export default UserLogo;
