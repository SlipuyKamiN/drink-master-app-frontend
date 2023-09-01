import AuthNavTitle from 'components/WelcomePage/AuthNavTitle';
import SigninForm from 'components/WelcomePage/SigninForm';
import scss from './SignupPage.module.scss';
import welcomeCss from './WelcomePage.module.scss';

const SigninPage = () => {
  return (
    <section className={welcomeCss.wrapper}>
      <div className={scss.container}>
        <AuthNavTitle title="Sign In" />
        <SigninForm />
      </div>
    </section>
  );
};

export default SigninPage;
