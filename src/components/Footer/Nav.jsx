import { Link } from 'react-router-dom';
import scss from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={scss.navigate}>
      <Link to="/drinks">Drinks</Link>
      <Link to="/add">Add recipes</Link>
      <Link to="/my">My recipes</Link>
      <Link to="/favorite">Favorites</Link>
    </nav>
  );
};

export default Nav;
