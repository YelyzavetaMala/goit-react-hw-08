import { useDispatch } from "react-redux";
import { addContact } from "../redux/contacts/operations";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleFormSubmit = (formData, formActions) => {
    dispatch(addContact(formData));
    formActions.resetForm();
    formActions.setErrors({});
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field id={nameFieldId} type="text" name="name" required />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field id={numberFieldId} type="tel" name="number" required />
          <ErrorMessage name="number" component="div" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
