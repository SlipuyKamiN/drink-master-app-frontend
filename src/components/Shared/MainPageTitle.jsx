import sass from './MainPageTitle.module.scss';

const MainPageTitle = ({ name }) => {
  return <h1 className={sass.title}>{name}</h1>;
};

export default MainPageTitle;
