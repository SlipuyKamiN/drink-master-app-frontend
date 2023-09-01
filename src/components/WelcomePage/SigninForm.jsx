import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import scss from './SignupForm.module.scss';
import { useSigninMutation } from 'redux/authSlice';
import { notification } from 'components/Shared/notification';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
import { useState } from 'react';

const SigninForm = () => {
  const [dispatch, { data, isLoading, isError }] = useSigninMutation();
  console.log(data, isLoading, isError);
  const [hidePassword, setHidePassword] = useState(true);

  const {
    register,
    formState: { errors, isValid, dirtyFields },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = data => {
    dispatch(data)
      .unwrap()
      .then(() => {
        reset();
      })
      .catch(notification());
  };

  if (isError) {
    notification();
  }

  return (
    <div className={scss.div}>
      <form
        autoComplete="off"
        className={scss.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className={scss.label}>
          <input
            type="email"
            className={scss.input}
            placeholder="Email"
            {...register('email', {
              required: 'Must be filled!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'This is an ERROR email',
              },
            })}
          />
          <span className={scss.circle}>
            {errors?.email?.message && (
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
        <div className={scss.error}>
          {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
          {!errors.email && dirtyFields.email && (
            <p style={{ color: '#3CBC81' }}>This is an CORRECT email</p>
          )}
        </div>
        <label className={scss.label}>
          <input
            type={hidePassword ? 'password' : 'text'}
            className={scss.input}
            placeholder="Password"
            {...register('password', {
              required: 'Must be filled!',
              minLength: {
                value: 6,
                message: 'Must be between 6 and 16 characters!',
              },
              maxLength: {
                value: 16,
                message: 'Must be between 6 and 16 characters!',
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  'Must contain at least 1 uppercase letter, 1 lowercase letter and 1 number!',
              },
            })}
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
        <div className={scss.error}>
          {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
        </div>
        <button
          className={scss.btn}
          type="submit"
          disabled={!isValid || isLoading}
        >
          {isLoading ? <LoadingSpinner size={50} /> : 'Sign In'}
        </button>
      </form>
      <NavLink className={scss.nav} to="/signup">
        Registration
      </NavLink>
    </div>
  );
};

export default SigninForm;
