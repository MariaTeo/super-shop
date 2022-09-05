import * as yup from 'yup';

export const initialEmail = {
  email: '',
};

export const initialPassword = {
  password: '',
};

export const validateEmail = yup.object().shape({
  email: yup.string().email().required(),
});

export const validatePassword = yup.object().shape({
  password: yup.string().min(6).max(30).required(),
});
