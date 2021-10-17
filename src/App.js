import { useEffect, useState } from "react";
import "./App.css";
import { userLoggedIn } from "./store/actions";
import { useStore } from "./store/DataContext";

function App() {
  const { state, dispatch } = useStore(); //Global state implementation
  const [userData, setUserData] = useState({ username: "", password: "" }); //User data initial state

  //* Handliging input onChange
  const handleChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  //* Handliging form submit event
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form-submitted", userData);
    dispatch(userLoggedIn(userData)); //this will update submitted user to global state
  };

  //*Calls when state changes
  useEffect(() => {
    console.log("Global-state", state);
  }, [state]);

  return (
    <div className="full-screen-container">
      <div className="login-container">
        <h3 className="login-title">Login</h3>
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="username"
              value={userData.username}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
