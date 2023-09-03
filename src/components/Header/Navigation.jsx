import { NavLink } from 'react-router-dom';
import css from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/drinks" className={css.link}>
            Drinks
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" className={css.link}>
            Add recipe
          </NavLink>
        </li>
        <li>
          <NavLink to="/my" className={css.link}>
            My recipes
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorite" className={css.link}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
