import AuthNavTitle from 'components/WelcomePage/AuthNavTitle';
import SigninForm from 'components/WelcomePage/SigninForm';
import scss from './SignupPage.module.scss';

const SigninPage = () => {
  return (
    <div className={scss.container}>
      <AuthNavTitle title="Sign In" />
      <SigninForm />
    </div>
  );
};

export default SigninPage;
