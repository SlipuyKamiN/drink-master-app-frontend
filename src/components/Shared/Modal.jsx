import { createPortal } from 'react-dom';
import sass from './Modal.module.scss';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, toggleModal }) => {
  const handleToggleModal = event => {
    const isEventModalControlElement =
      event.target.dataset?.backdrop || event.code === 'Escape';

    if (isEventModalControlElement) {
      toggleModal();
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleToggleModal);
    window.addEventListener('click', handleToggleModal);
    return () => {
      window.removeEventListener('keydown', handleToggleModal);
      window.removeEventListener('click', handleToggleModal);
    };
  });

  return createPortal(
    <div className={sass.backdrop} data-backdrop>
      <div className={sass.modal}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
