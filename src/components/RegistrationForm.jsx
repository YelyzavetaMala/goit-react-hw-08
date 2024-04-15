import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

import { IoPersonAddSharp } from "react-icons/io5";

const UserRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("User name is required!")
    .min(2, "User name must be at least 2 characters!")
    .max(50, "User name must be less than 50 characters!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (data, formActions) => {
    console.log("data Register: ", data);
    dispatch(register(data));
    formActions.resetForm();
    formActions.setErrors({});
  };

  return (
    <Formik
      validationSchema={UserRegisterSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>Register</h2>

        <label>
          <span>User name:</span>
          <Field placeholder="Alex Mihalich" type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          <span>Email:</span>
          <Field placeholder="alex@patron.com" type="email" name="email" />
          <ErrorMessage name="email" component="span" />
        </label>
        <label>
          <span>Password:</span>
          <Field
            placeholder="Enter your password"
            type="password"
            name="password"
          />
          <ErrorMessage name="password" component="span" />
        </label>

        <button
          type="submit"
          title="Click to register user"
          aria-label="Add new mailbox"
        >
          Register <IoPersonAddSharp />
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
