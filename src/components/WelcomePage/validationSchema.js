import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Must be filled!')
    .matches(
      '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
      'This is an ERROR email'
    ),
  name: yup
    .string()
    .min(2, 'Must be minimum 2 characters')
    .required('Must be filled!'),
  password: yup
    .string()
    .min(6, 'Must be between 6 and 16 characters!')
    .max(16, 'Must be between 6 and 16 characters!')
    .required('Must be filled!')
    .matches(
      '/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[A-Za-zd@$!%*?&]{8,}$/',
      'Must contain at least 1 uppercase letter, 1 lowercase letter and 1 number!'
    ),
});
