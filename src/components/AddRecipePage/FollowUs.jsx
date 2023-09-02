import scss from './FollowUs.module.scss'
import FollowUs from 'components/Footer/FollowUs';

const FollowUsResipe = () => {
  return <div className={scss.followUs}>
    <h3 className={scss.followUs__title}>Follow Us</h3>
    <FollowUs />
    </div>;
};

export default FollowUsResipe;
