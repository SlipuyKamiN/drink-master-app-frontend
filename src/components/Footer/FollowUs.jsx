import styles from './FollowUs.module.scss';
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoYoutube,
} from 'react-icons/bi';

const FollowUs = () => {
  return (
    <div>
      <ul className={styles.socialsList}>
        <li className={styles.socialsItem}>
          <a
            className={styles.socialsLink}
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoFacebook className={styles.socialsIcon} />
          </a>
        </li>
        <li className={styles.socialsItem}>
          <a
            className={styles.socialsLink}
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoInstagramAlt className={styles.socialsIcon} />
          </a>
        </li>
        <li className={styles.socialsItem}>
          <a
            className={styles.socialsLink}
            href="http://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoYoutube className={styles.socialsIcon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FollowUs;
