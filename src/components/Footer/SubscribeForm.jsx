import { useSubscribeMutation } from 'redux/authSlice';
import styles from './SubscribeForm.module.scss';
import { useState } from 'react';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import { notification } from 'components/Shared/notification';
const SubscribeForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [dispatch, { data, isLoading, isError }] = useSubscribeMutation();

  const handleSubmit = event => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    dispatch({ email });
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  if (isError) notification('There is no user with this email registered!');

  return (
    <div className={styles.subscribeForm}>
      <p className={styles.subscribeText}>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </p>
      <form className={styles.subscribeFormFields} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter the email"
          pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"
          className={styles.subscribeFormInput}
          required
        />
        <button
          type="submit"
          className={styles.subscribeButton}
          disabled={isLoading}
        >
          {isLoading ? <LoadingSpinner size={45} /> : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
