import { Form, Formik } from "formik";
import React from "react";
import { useEffect } from "react";
import { userLoggedIn } from "../store/actions";
import { useStore } from "../store/DataContext";
import "../styles/login.css";

const initialValues = { username: "", password: "" };
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Enter valid email").required("Required"),
  password: Yup.string()
    .min(6, "minimum should be six letters")
    .required("Required"),
});

const Login = () => {
  const { state, dispatch } = useStore();

  const onSubmit = (values) => {
    console.log("Form-submitted", values);
    dispatch(userLoggedIn(values));
  };

  useEffect(() => {
    console.log("Global-state", state);
  }, [state]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onsubmit}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {(props) => {
        const { values, handleChange, handleBlur, resetForm } = props;
        return (
          <Form>
            <div className="full-screen-container">
              <div className="login-container">
                <h3 className="login-title">Login</h3>
                <form onSubmit={onSubmit}>
                  <div className="input-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="input-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <button
                    type="reset"
                    className="login-button"
                    onClick={resetForm}
                  >
                    Reset
                  </button>
                  <button type="submit" className="login-button">
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
