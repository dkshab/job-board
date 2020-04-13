import React from "react";
import { Route } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import Home from "../../components/Home";
import SignInAndSignUp from "../../components/SignInAndSignUp";
import NavBarNonAuth from "./NavBarNonAuth";
import JobsList from "../../components/jobs/JobsList";
import Search from "../../components/Search";
import AddJob from "../../components/AddJob";
import JobPage from "../../components/jobs/JobPage";

const AuthApp = () => {
  return (
    <div className="wrapper">
      <NavBarNonAuth />
      <main className="main">
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.SIGNIN} component={SignInAndSignUp} />
        <Route exact path={ROUTES.JOBS} component={JobsList} />
        <Route exact path={ROUTES.ADD_JOB} component={AddJob} />
        <Route exact path={ROUTES.SEARCH} component={Search} />
        <Route exact path={ROUTES.JOBPAGE} component={JobPage} />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default AuthApp;
