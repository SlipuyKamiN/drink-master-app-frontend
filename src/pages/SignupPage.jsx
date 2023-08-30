import AuthNavTitle from 'components/WelcomePage/AuthNavTitle';
import SignupForm from 'components/WelcomePage/SignupForm';
import scss from './SignupPage.module.scss';

const SignupPage = () => {
  return (
    <div className={scss.container}>
      <AuthNavTitle title="Registration" />
      <SignupForm />
    </div>
  );
};

export default SignupPage;
