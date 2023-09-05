import { Link } from 'react-router-dom';
import scss from './Nav.module.scss';

const Nav = () => {
  return (
    <nav>
      <ul className={scss.navigate}>
        <li>
          <Link to="/drinks">Drinks</Link>
        </li>
        <li>
          <Link to="/add">Add recipes</Link>
        </li>
        <li>
          <Link to="/my">My recipes</Link>
        </li>
        <li>
          <Link to="/favorite">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
