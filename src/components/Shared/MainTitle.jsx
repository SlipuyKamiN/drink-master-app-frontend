import sass from './MainTitle.module.scss';

const MainTitle = ({ title, style }) => {
  return (
    <h2 className={sass.title} style={style}>
      {title}
    </h2>
  );
};

export default MainTitle;
