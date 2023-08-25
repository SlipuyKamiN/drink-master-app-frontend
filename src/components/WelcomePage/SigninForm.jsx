import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SigninForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = data => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email
          <input
            {...register('email', {
              required: 'Must be filled!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'This is an ERROR email',
              },
            })}
          />
        </label>
        <div>
          {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
        </div>
        <label>
          Password
          <input
            {...register('password', {
              required: 'Must be filled!',
              minLength: {
                value: 6,
                message: 'Must be at least 6 characters long!',
              },
            })}
          />
        </label>
        <div>
          {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
        </div>
        <button type="submit" disabled={!isValid}>
          Sign In
        </button>
      </form>
      <NavLink to="/signup">Registration</NavLink>
    </div>
  );
};

export default SigninForm;
