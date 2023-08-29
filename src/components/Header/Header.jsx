import Container from 'components/Shared/Container';
import Logo from './Logo';
import Navigation from './Navigation';
import css from './Header.module.scss';
import UserLogo from './UserLogo';
// import UserLogoModal from './UserLogoModal';
import useWindowDimensions from 'hooks/useWindowDimensions';


const Header = () => {
  const {width} = useWindowDimensions();
  
  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapper}>
          <Logo />
          {width > 1439 ? <Navigation /> : null}
          <UserLogo/>
          {/* <UserLogoModal/> */}
        </div>
      </Container>
    </header>
  );
};

export default Header;
