import styles from './SubscribeForm.module.scss';
const SubscribeForm = () => {
  return (
    <div className={styles.subscribeForm}>
      <p className={styles.subscribeText}>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </p>
      <form className={styles.subscribeFormFields}>
        <input
          type="email"
          placeholder="Enter the email"
          className={styles.subscribeFormInput}
        />
        <button type="submit" className={styles.subscribeButton}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
