import * as yup from 'yup';

export const signinSchema = yup.object().shape({
  email: yup
    .string()
    .required('Must be filled!')
    .matches(
      '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
      'This is an ERROR email'
    ),
  password: yup
    .string()
    .min(6, 'Must be between 6 and 16 characters!')
    .max(16, 'Must be between 6 and 16 characters!')
    .required('Must be filled!')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
      'Must contain at least 1 uppercase letter, 1 lowercase letter and 1 number!'
    ),
});
