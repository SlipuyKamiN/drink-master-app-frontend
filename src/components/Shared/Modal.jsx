import { createPortal } from 'react-dom';
import sass from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  return createPortal(
    <div className={sass.backdrop}>
      <div className={sass.modal}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
