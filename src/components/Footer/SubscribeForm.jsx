import { useSubscribeMutation } from 'redux/authSlice';
import styles from './SubscribeForm.module.scss';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import { notification } from 'components/Shared/notification';
import { useForm } from 'react-hook-form';
import { validationSchema } from './validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';

const SubscribeForm = () => {
  const [dispatch, { data, isLoading, isError }] = useSubscribeMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: { email: '' },
    resolver: yupResolver(validationSchema),
  });

  const formSubmit = data => {
    dispatch(data)
      .unwrap()
      .then(() => {
        reset({ email: '' });
      })
      .catch(notification);
  };

  if (isError && !data) {
    notification('There is no user with this email registered!');
  }

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
          className={`${styles.subscribeFormInput} ${
            errors.email && dirtyFields.email ? styles.invalid : styles.valid
          }`}
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
