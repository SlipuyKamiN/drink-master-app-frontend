import Container from 'components/Shared/Container';
import Logo from './Logo';
import Navigation from './Navigation';
import css from './Header.module.scss';

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapper}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
