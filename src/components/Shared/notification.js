import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notification = (
  message = 'Oops. Something went wrong...',
  type = 'error'
) => {
  const toastConfig = {
    position: 'top-center',
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  };

  if (type === 'success') {
    toast.success(message, toastConfig);
    return;
  }

  toast.error(message, toastConfig);
};
