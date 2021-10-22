import React from "react";
import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

const Dashboard = lazy(() => import("./Pages/Dashboard.js"));
const Login = lazy(() => import("./pages/Login.js"));

const Routes = () => {
  const location = useLocation();

  return (
    <Suspense
      fallback={
        <div className="">
          Please wait.....
        </div>
      }
    >
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path={["/login"]}>
          <Switch location={location} key={location.pathname}>
            <Route path="/login" component={Login} />
          </Switch>
        </Route>
      </Switch>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
