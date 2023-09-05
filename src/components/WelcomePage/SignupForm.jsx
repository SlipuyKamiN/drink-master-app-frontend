import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import scss from './SignupForm.module.scss';
import { useSigninMutation, useSignupMutation } from 'redux/authSlice';
import { notification } from 'components/Shared/notification';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import { useState } from 'react';
import { signupSchema } from './signupSchema';
import { yupResolver } from '@hookform/resolvers/yup';

// const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
// const nameRegexp = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// type={hidePassword ? "password" : "text"}
// onClick={()=>{setHidePassword(!hidePassword)}}

const SignupForm = () => {
  const [dispatch, { isLoading }] = useSignupMutation();
  const [login] = useSigninMutation();
  const [hidePassword, setHidePassword] = useState(true);

  const {
    register,
    formState: { errors, isValid, dirtyFields },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: { name: '', email: '', password: '' },
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = ({ name, email, password }) => {
    dispatch({ name, email: email.toLowerCase(), password })
      .unwrap()
      .then(() => {
        login({ email, password });
        reset();
      })
      .catch(e => notification(e.data.message));
  };

  return (
    <div className={scss.div}>
      <form
        autoComplete="off"
        className={scss.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className={scss.label}>
          <input
            type="text"
            placeholder="Name"
            className={`${scss.input} ${errors.name && scss.invalid}
             ${!errors.name && dirtyFields.name && scss.valid}`}
            {...register('name')}
          />
          <span className={scss.circle}>
            {errors.name?.message && (
              <BiErrorCircle
                style={{
                  width: '24px',
                  height: '24px',
                  color: 'red',
                }}
              />
            )}
            {!errors.name && dirtyFields.name && (
              <BiCheckCircle
                style={{
                  width: '24px',
                  height: '24px',
                  color: '#3CBC81',
                }}
              />
            )}
          </span>
        </label>
        {errors.name && <p className={scss.error}>{errors.name.message}</p>}
        <label className={scss.label}>
          <input
            type="email"
            className={`${scss.input} ${errors.email && scss.invalid}
           ${!errors.email && dirtyFields.email && scss.valid}`}
            placeholder="Email"
            {...register('email')}
          />
          <span className={scss.circle}>
            {errors.email?.message && (
              <BiErrorCircle
                style={{
                  width: '24px',
                  height: '24px',
                  color: 'red',
                }}
              />
            )}
            {!errors.email && dirtyFields.email && (
              <BiCheckCircle
                style={{
                  width: '24px',
                  height: '24px',
                  color: '#3CBC81',
                }}
              />
            )}
          </span>
        </label>
        {errors.email && <p className={scss.error}>{errors.email.message}</p>}
        {!errors.email && dirtyFields.email && (
          <p style={{ color: '#3CBC81' }} className={scss.error}>
            This is an CORRECT email
          </p>
        )}
        <label className={scss.label}>
          <input
            type={hidePassword ? 'password' : 'text'}
            className={`${scss.input} ${errors.password && scss.invalid}
           ${!errors.password && dirtyFields.password && scss.valid}`}
            placeholder="Password"
            {...register('password')}
          />
          <span
            onClick={() => {
              setHidePassword(!hidePassword);
            }}
            className={scss.circle}
          >
            {hidePassword && dirtyFields.password && (
              <FiEyeOff
                style={{
                  width: '24px',
                  height: '24px',
                }}
              />
            )}
            {!hidePassword && (
              <FiEye
                style={{
                  width: '24px',
                  height: '24px',
                }}
              />
            )}
          </span>
        </label>
        {errors.password && (
          <p className={scss.error}>{errors.password.message}</p>
        )}
        {!errors.password && dirtyFields.password && (
          <p style={{ color: '#3CBC81' }} className={scss.error}>
            This is an CORRECT password
          </p>
        )}
        <button
          className={scss.btn}
          type="submit"
          disabled={!isValid || isLoading}
        >
          {isLoading ? <LoadingSpinner size={50} /> : 'Sign Up'}
        </button>
      </form>
      <NavLink className={scss.nav} to="/signin">
        Sign In
      </NavLink>
    </div>
  );
};

export default SignupForm;
