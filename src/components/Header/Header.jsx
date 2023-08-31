import Container from 'components/Shared/Container';
import Logo from './Logo';
import Navigation from './Navigation';
import css from './Header.module.scss';
import UserLogo from './UserLogo';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { ReactComponent as BurgerIcon } from '../../images/burger.svg';

const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapper}>
          <Logo />
          {width > 1439 && <Navigation />}
          <div className={css.rightWrapper}>
            <UserLogo />
            {width < 1440 && (
              <button className={css.btn} type="button">
                <BurgerIcon className={css.img}/>
              </button>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
