import Container from 'components/Shared/Container';
import FollowUs from './FollowUs';
import Nav from './Nav';
import SubscribeForm from './SubscribeForm';
import Logo from 'components/Header/Logo';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerMainContent}>
          <div className={styles.followUsBlock}>
            <Logo />
            <FollowUs />
          </div>
          <Nav />
          <SubscribeForm className={styles.subscribeForm} />
        </div>
        <div className={styles.bottomString}>
          <p>©2023 Drink Master. All rights reserved.</p>
          <div className={styles.privacyAndTerms}>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
