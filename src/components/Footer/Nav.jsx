import { Link } from 'react-router-dom';
import scss from './Nav.module.scss';
import { footerNavData } from 'data/footer';
import { scrollToTop } from 'helpers/scrollToTop';

const Nav = () => {
  return (
    <nav>
      <ul className={scss.navigate}>
        {footerNavData.map(({ href, text }) => (
          <li key={text}>
            <Link to={`/${href}`} onClick={scrollToTop}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
