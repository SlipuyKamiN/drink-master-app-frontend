import sass from './NoContent.module.scss';

const NoContentSection = ({ children }) => {
  return <section className={sass.wrapper}>{children}</section>;
};

export default NoContentSection;
