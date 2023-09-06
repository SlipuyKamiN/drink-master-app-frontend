import { NavLink } from 'react-router-dom';
import css from './Navigation.module.scss';
import { headerNavData } from 'data/header';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        {headerNavData.map(({ href, text }) => (
          <li key={text}>
            <NavLink to={`/${href}`} className={css.link}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
