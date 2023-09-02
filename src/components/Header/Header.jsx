import { useState, useEffect } from 'react';
import Container from 'components/Shared/Container';
import Logo from './Logo';
import Navigation from './Navigation';
import css from './Header.module.scss';
import UserLogo from './UserLogo';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { ReactComponent as BurgerIcon } from '../../images/burger.svg';
import { ReactComponent as CloseIcon } from '../../images/x.svg';

const Header = () => {
  const [mobileMenuVisible, setMobilMenuVisible] = useState(false);
  const { width } = useWindowDimensions();
  const {visible} = css;

  const handleMobileToggle = () => {
    setMobilMenuVisible(!mobileMenuVisible);
  }

  const handleNavClick = (event) => {
    if(event.target.tagName === 'A') {
      console.log(event.target.tagName)
    handleMobileToggle();
    }
  }

  useEffect(() => {
    if (mobileMenuVisible) {
      document.body.style.overflow = 'hidden';
    } 
    if (!mobileMenuVisible) {
      document.body.style.overflow = 'unset';;
    } 
 }, [mobileMenuVisible ]);

  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapper}>
          <Logo />
          {width > 1439 && <Navigation />}
          <div className={css.rightWrapper}>
            <UserLogo />
            {width < 1440 && (
              <button className={css.btn} type="button" onClick={handleMobileToggle}>
                {mobileMenuVisible ? (
                  <CloseIcon className={css.img} />
                ) : (
                  <BurgerIcon className={css.img} />
                )}
              </button>
            )}
          </div>
        </div>
        
          <div className={`${css.mobile} ${mobileMenuVisible ? visible : ""}`} onClick={handleNavClick}>
            {width < 1440 && <Navigation />}
          </div>
        
      </Container>
    </header>
  );
};

export default Header;
