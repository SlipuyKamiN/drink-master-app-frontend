import scss from './AuthNavTitle.module.scss';

const AuthNavTitle = ({ title }) => {
  return <h2 className={scss.title}>{title}</h2>;
};

export default AuthNavTitle;
