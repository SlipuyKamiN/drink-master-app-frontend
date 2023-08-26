import { NavLink } from "react-router-dom";
import css from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <NavLink
            to="/main"
            className={({ isActive }) => `${isActive ? css.active : css.link}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/drinks"
            className={({ isActive }) => `${isActive ? css.active : css.link}`}
          >
            Drinks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add"
            className={({ isActive }) => `${isActive ? css.active : css.link}`}
          >
            Add recipe
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my"
            className={({ isActive }) => `${isActive ? css.active : css.link}`}
          >
            My recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorite"
            className={({ isActive }) => `${isActive ? css.active : css.link}`}
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
