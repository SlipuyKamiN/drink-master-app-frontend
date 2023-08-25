import AuthNav from 'components/WelcomePage/AuthNav';
import AuthNavTitle from 'components/WelcomePage/AuthNavTitle';

const WelcomePage = () => {
  return (
    <div>
      <AuthNavTitle title="Welcome to the app!" />
      <AuthNav />
    </div>
  );
};

export default WelcomePage;
