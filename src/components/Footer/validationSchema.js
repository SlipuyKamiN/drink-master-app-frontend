import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('No email provided.')
    .matches(
      '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i',
      'Email can contain letters, digits and may contain "@" and "." example@mail.com'
    ),
});
