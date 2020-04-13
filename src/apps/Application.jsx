import React from "react";
import { Route } from "react-router-dom";

import "../sass/styles.scss";

import * as ROUTES from "../constants/routes";

import NavBar from "../components/NavBar";
import Home from "../components/Home";
import SignInAndSignUp from "../components/SignInAndSignUp";
import JobsList from "../components/JobsList";
import AddJob from "../components/AddJob";
import Search from "../components/Search";
import JobPage from "../components/jobs/JobPage";

const Application = () => {
  return (
    <div className="wrapper">
      <NavBar />
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

export default Application;
