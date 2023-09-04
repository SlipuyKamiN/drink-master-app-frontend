import styles from './Logo.module.scss';
import { ReactComponent as SiteLogo } from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className={styles.link}>
      <SiteLogo className={styles.logoImg} />
      <p className={styles.logoText}>Drink Master</p>
    </Link>
  );
};

export default Logo;
