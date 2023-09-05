import { useEffect, useState } from 'react';
import Modal from 'components/Shared/Modal';
import styles from './FooterModal.module.scss';

const FooterModal = ({ title, content }) => {
  const [isOpen, setIsopen] = useState(false);
  const toggleModal = () => {
    setIsopen(prev => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('is-open');
    }
    if (!isOpen) {
      document.body.classList.remove('is-open');
    }
  }, [isOpen]);

  return (
    <li>
      <button type="button" className={styles.btn} onClick={toggleModal}>
        {title}
      </button>
      {isOpen && (
        <Modal className={styles.modal} toggleModal={toggleModal}>
          <section className={styles.section}>
            <ul>
              {content.split('\n').map((item, index) => (
                <li key={item + index}>
                  <p>{item}</p>
                  <br />
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={styles.modalBtn}
              onClick={toggleModal}
            >
              Close
            </button>
          </section>
        </Modal>
      )}
    </li>
  );
};

export default FooterModal;
