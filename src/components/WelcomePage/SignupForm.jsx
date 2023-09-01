import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import scss from './SignupForm.module.scss';
import { useSignupMutation } from 'redux/authSlice';
import { notification } from 'components/Shared/notification';
import LoadingSpinner from 'components/Shared/LoadingSpinner';

// const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
// const nameRegexp = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// type={hidePassword ? "password" : "text"}
// onClick={()=>{setHidePassword(!hidePassword)}}

const SignupForm = () => {
  const [dispatch, { data, isLoading, isError }] = useSignupMutation();
  console.log(data, isLoading, isError);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = data => {
    dispatch(data);
    // alert(JSON.stringify(data));
    reset();
  };

  if (isError) {
    notification();
  }

  return (
    <div className={scss.div}>
      <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={scss.label}>
          <input
            className={scss.input}
            placeholder="Name"
            {...register('name', { required: 'Must be filled!' })}
          />
          <div className={scss.error}>
            {errors?.name && <p>{errors?.name?.message || 'Error!'}</p>}
          </div>
        </label>
        <label className={scss.label}>
          <input
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
          <div className={scss.error}>
            {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
          </div>
        </label>
        <label className={scss.label}>
          <input
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
          <div className={scss.error}>
            {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
          </div>
        </label>
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