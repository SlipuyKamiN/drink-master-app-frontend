import sass from './MainTitle.module.scss';

const MainTitle = ({ children, margin = '0', padding = '0' }) => {
  return (
    <h2 className={sass.title} style={{ margin, padding }}>
      {children}
    </h2>
  );
};

export default MainTitle;
