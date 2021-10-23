import { Formik } from "formik";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import "../styles/login.css";

const initialValues = { username: "", password: "" };

const validationSchema = Yup.object().shape({
  username: Yup.string().email("Enter valid email").required("Required"),
  password: Yup.string()
    .min(6, "minimum should be six letters").matches('/^[a-zA-Z0-9]+$/')
    .required("Required"),
});

const Login = () => {
  const history = useHistory();
  const [authErr, setAuthErr] = useState("");

  const auth = {
    username: "Employee_One@gmail.com",
    password: "Employee123"
  }

  const handleSubmit = (values) => {
    console.log(9088656, values);
    if (values.username === auth.username && values.password === auth.password) {
      // logic
      // localStoarge
      // redirect dashboard
      const userData = JSON.stringify(values)
      localStorage.setItem('userData', userData)
      history.push('/dashboard')
    } else {
      setAuthErr("Invalid username or password!");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {(props) => {
        const { values, handleChange, handleBlur, resetForm, errors, touched } = props;
        return (
          <form onSubmit={handleSubmit}>
            <div className="full-screen-container">
              <div className="login-container">
                <h3 className="login-title">Login</h3>
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span>{errors.username && touched.username}</span>
                </div>
                <div className='auth-error'>{authErr}</div>
                <div className="input-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span>{errors.password && touched.password}</span>
                </div>
                <div className="button-group">
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
                </div>
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Login;
