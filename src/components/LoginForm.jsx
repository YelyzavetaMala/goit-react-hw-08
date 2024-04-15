import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import * as Yup from "yup";

const UserRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formData, formActions) => {
    dispatch(login(formData));
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
        <h2>Login</h2>

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
          aria-label="Add new email"
        >
          LogIn
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
