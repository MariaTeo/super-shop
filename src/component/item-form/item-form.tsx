import { Field, Formik } from 'formik';
import { InputField } from '../input-field';
import * as S from './item-form.styled';
import * as T from './item-form.type';

const initialValues = {
  title: '',
};

const ItemForm = ({ submit, editMe }: T.ItemForm) => {
  return (
    <div>
      <h1>Article form</h1>

      <Formik initialValues={{ ...initialValues, ...editMe }} onSubmit={submit}>
        {({ values }) => (
          <S.FormWrap>
            <Field
              component={InputField}
              type="text"
              name="title"
              description="type email"
              placeholder="Type item title"
            />
            <button type="submit">Save</button>
          </S.FormWrap>
        )}
      </Formik>
    </div>
  );
};

export default ItemForm;
