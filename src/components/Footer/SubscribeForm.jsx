import { useSubscribeMutation } from 'redux/authSlice';
import styles from './SubscribeForm.module.scss';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import { notification } from 'components/Shared/notification';
import { useForm } from 'react-hook-form';
import { validationSchema } from './validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const SubscribeForm = () => {
  const [dispatch, { isLoading }] = useSubscribeMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    defaultValues: { email: '' },
    resolver: yupResolver(validationSchema),
  });

  const formSubmit = ({ email }) => {
    dispatch({ email: email.toLowerCase() })
      .unwrap()
      .then(() => {
        reset({ email: '' });
        notification('Email has been successfully sent!', 'success');
      })
      .catch(e => notification(e.data.message));
  };

  return (
    <div className={styles.subscribeForm}>
      <p className={styles.subscribeText}>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </p>
      <form
        className={styles.subscribeFormFields}
        onSubmit={handleSubmit(formSubmit)}
      >
        <input
          type="text"
          name="email"
          placeholder="Enter the email"
          className={`${styles.subscribeFormInput} 
          ${errors.email && styles.invalid}
           ${!errors.email && dirtyFields.email && styles.valid}`}
          {...register('email')}
        />
        {errors.email && (
          <p className={styles.errorText}>{errors.email.message}</p>
        )}
        <button
          type="submit"
          className={styles.subscribeButton}
          disabled={isLoading || !dirtyFields.email}
        >
          {isLoading ? <LoadingSpinner size={45} /> : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
