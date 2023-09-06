import { socialsListData } from 'data/footer';
import styles from './FollowUs.module.scss';

const FollowUs = () => {
  return (
    <ul className={styles.socialsList}>
      {socialsListData.map(({ href, icon: Icon }) => (
        <li className={styles.socialsItem} key={href}>
          <a
            className={styles.socialsLink}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className={styles.socialsIcon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FollowUs;
