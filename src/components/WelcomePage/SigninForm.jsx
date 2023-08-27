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
          <input
            placeholder="Email"
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
          <input
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
