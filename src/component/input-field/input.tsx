import { FormikProps } from 'formik';
import * as S from './input.style';

const InputField = ({
  form,
  field,
  type,
  placeholder,
  id,
  ...props
}: FormikProps<any>) => {
  return (
    <div>
      <S.InputWrap>
        <label htmlFor={id}>{placeholder}</label>
        <input type={type} placeholder={placeholder} {...field} {...props} />
      </S.InputWrap>
    </div>
  );
};

export default InputField;
