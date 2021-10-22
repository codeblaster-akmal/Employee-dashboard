import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Login = lazy(() => import("./Pages/Login.js"));
const Dashboard = lazy(() => import("./Pages/Dashboard.js"));
const NotFound = lazy(() => import("./Pages/NotFound.js"));

function App() {

  return (
    <Router>
      <Suspense
        fallback={
          <div>Loading...</div>
        }
      >
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
