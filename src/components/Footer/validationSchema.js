import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('No email provided.')
    .matches(
      '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
      'Email can contain letters, digits and may contain "@" and "." example@mail.com'
    ),
});
