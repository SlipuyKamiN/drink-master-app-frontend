import sass from './MainTitle.module.scss';

const MainTitle = ({ title }) => {
  return <h2 className={sass.title}>{title}</h2>;
};

export default MainTitle;
