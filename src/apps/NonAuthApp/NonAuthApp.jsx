import React from "react";
import { Route } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import Home from "../../components/Home";
import SignInAndSignUp from "../../components/SignInAndSignUp";
import NavBarNonAuth from "./NavBarNonAuth";
import JobsList from "../../components/jobs/JobsList";
import Search from "../../components/Search";
import JobPage from "../../components/jobs/JobPage";

import SignInRecruiters from "../../components/recruiters/SignInRecruiters";
import SignUpRecruiters from "../../components/recruiters/SignUpRecruiters";
import ServicesNonAuth from "../../components/recruiters/ServicesNonAuth";

const AuthApp = () => {
  return (
    <div className="wrapper">
      <NavBarNonAuth />
      <main className="main">
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.SIGNIN} component={SignInAndSignUp} />
        <Route exact path={ROUTES.JOBS} component={JobsList} />
        <Route exact path={ROUTES.SEARCH} component={Search} />
        <Route exact path={ROUTES.JOBPAGE} component={JobPage} />
        <Route
          exact
          path={ROUTES.RECRUITER_PAGE_NON_AUTH}
          component={ServicesNonAuth}
        />
        <Route
          exact
          path={ROUTES.RECRUITER_SIGNIN}
          component={SignInRecruiters}
        />{" "}
        <Route
          exact
          path={ROUTES.RECRUITER_SIGNUP}
          component={SignUpRecruiters}
        />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default AuthApp;
