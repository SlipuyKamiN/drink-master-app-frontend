import Container from 'components/Shared/Container';
import FollowUs from './FollowUs';
import Nav from './Nav';
import SubscribeForm from './SubscribeForm';
import Logo from 'components/Header/Logo';
import styles from './Footer.module.scss';
import FooterModal from './FooterModal';
import {
  termsOfService,
  privacyPolicy,
} from './PrivacyPolicyAndTermsOfService';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerMainContent}>
          <div className={styles.socialsAndNav}>
            <div className={styles.followUsBlock}>
              <Logo />
              <FollowUs />
            </div>
            <Nav />
          </div>
          <SubscribeForm className={styles.subscribeForm} />
        </div>
        <div className={styles.bottomString}>
          <p>©2023 Drink Master. All rights reserved.</p>
          <div className={styles.privacyAndTerms}>
            <FooterModal
              title={privacyPolicy.title}
              content={privacyPolicy.content}
            ></FooterModal>
            <FooterModal
              title={termsOfService.title}
              content={termsOfService.content}
            ></FooterModal>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
