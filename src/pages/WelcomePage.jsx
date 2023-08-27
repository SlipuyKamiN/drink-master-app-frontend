import AuthNav from 'components/WelcomePage/AuthNav';
import AuthNavTitle from 'components/WelcomePage/AuthNavTitle';
import scss from './WelcomePage.module.scss';

const WelcomePage = () => {
  return (
    <div className={`${scss.container} ${scss.center}`}>
      <AuthNavTitle title="Welcome to the app!" />
      <AuthNav />
    </div>
  );
};

export default WelcomePage;
