import scss from "./FollowUs.module.scss"
import {BiLogoFacebook, BiLogoInstagram, BiLogoYoutube} from 'react-icons/bi'


const FollowUs = () => {
  return <div>
      <ul className={scss.socials}>
    <li className={scss.socialsItem}>
                    <a
                      className={scss.socialsLink}
                      href="http://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiLogoFacebook/>
                    </a>
                  </li>
                  <li className={scss.socialsItem}>
                    <a
                      className={scss.socialsLink}
                      href="http://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiLogoInstagram/>
                    </a>
                  </li>
                  <li className={scss.socialsItem}>
                    <a
                      className={scss.socialsLink}
                      href="http://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiLogoYoutube/>
                    </a>
                  </li>
    </ul>
  </div>;
};

export default FollowUs;
