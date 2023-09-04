import Container from 'components/Shared/Container';
import FollowUs from './FollowUs';
import Nav from './Nav';
import SubscribeForm from './SubscribeForm';
import Logo from 'components/Header/Logo';
import styles from './Footer.module.scss';
import Modal from 'components/Shared/Modal';
import { useState } from 'react';

const Footer = () => {
  const [isOpen, setIsopen] = useState(false);
  const toggleModal = () => {
    setIsopen(prev => !prev);
  };
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
            <p>Privacy Policy</p>
            <button type="button" onClick={toggleModal}>
              Terms of Service
            </button>
          </div>
        </div>
      </Container>
      {isOpen && (
        <Modal toggleModal={toggleModal}>
          <section>
            <button type="button" onClick={toggleModal}>
              close
            </button>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              obcaecati reiciendis placeat quae, corrupti quibusdam dolor nobis
              amet neque voluptatum dolore. Provident officiis, facere quaerat
              sequi quis alias voluptatibus expedita!20
            </p>
          </section>
        </Modal>
      )}
    </footer>
  );
};

export default Footer;
