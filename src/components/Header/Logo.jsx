import styles from "./Logo.module.scss";
import {ReactComponent as SiteLogo} from "../../images/logo.svg";

const Logo = () => {
    return (
        <a className={styles.link} href="/">
          <SiteLogo className={styles.logoImg} />
          <p className={styles.logoText}>Drink Master</p>
        </a>
    )
}

export default Logo;

