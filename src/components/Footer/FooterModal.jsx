import { useState } from 'react';
import Modal from 'components/Shared/Modal';
import styles from './FooterModal.module.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const FooterModal = ({ title, content }) => {
  const [isOpen, setIsopen] = useState(false);
  const toggleModal = () => {
    setIsopen(prev => !prev);
  };

  return (
    <div>
      <button type="button" className={styles.btn} onClick={toggleModal}>
        {title}
      </button>
      {isOpen && (
        <Modal className={styles.modal} toggleModal={toggleModal}>
          <section className={styles.section}>
            {/* <button type="button" onClick={toggleModal}> */}
            <AiOutlineCloseCircle
              size={30}
              cursor="pointer"
              onClick={toggleModal}
            />
            {/* </button> */}
            <p>{content}</p>
          </section>
        </Modal>
      )}
    </div>
  );
};

export default FooterModal;
