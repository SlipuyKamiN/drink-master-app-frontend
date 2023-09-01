import AuthNavTitle from 'components/WelcomePage/AuthNavTitle';
import SignupForm from 'components/WelcomePage/SignupForm';
import scss from './SignupPage.module.scss';
import welcomeCss from './WelcomePage.module.scss';

const SignupPage = () => {
  return (
    <section className={welcomeCss.wrapper}>
      <div className={scss.container}>
        <AuthNavTitle title="Registration" />
        <SignupForm />
      </div>
    </section>
  );
};

export default SignupPage;
