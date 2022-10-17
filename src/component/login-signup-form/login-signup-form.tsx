import { Field, Formik } from 'formik';
import { InputField } from '../input-field';
import * as S from './ login-signup-form.styled';

const initialValues = {
  email: '',
  password: '',
};

const LoginSignUp = ({ submit }: any) => {
  return (
    <div>
      <h1>Login form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={submit}
      >
        {({ values }) => (
          <S.FormWrap>
            <Field
              component={InputField}
              type='text'
              name='email'
              description='type email'
              placeholder='Type email'
            />
            <Field
              component={InputField}
              type='password'
              name='password'
              description='type password'
              placeholder='Type password'
            />
            <button type='submit'>Save</button>
          </S.FormWrap>
        )}
      </Formik>
    </div>
  );
};

export default LoginSignUp;
