import React from "react";
import { Route } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import SignInAndSignUp from "../../components/SignInAndSignUp";
import NavBarAuth from "./NavBarAuth";
import Home from "../../components/Home";
import JobsList from "../../components/jobs/JobsList";
import Search from "../../components/Search";
import JobPage from "../../components/jobs/JobPage";
import UserProfile from "../../components/UserProfile";
//import UpdateProfile from "./UpdateProfile";
import AddJob from "../../components/jobs/AddJob";
import TestProfile from "../../components/testComponents/TestProfile";
import ServicesAuth from "../../components/recruiters/ServicesAuth";
import About from "../../components/About";
import Account from "../../components/Account";
import RecruiterJobPage from "../../components/recruiters/RecruiterJobPage";

const AuthApp = () => {
  return (
    <div className="wrapper">
      <NavBarAuth />
      <main className="main">
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.SIGNIN} component={SignInAndSignUp} />
        <Route exact path={ROUTES.JOBS} component={JobsList} />
        <Route exact path={ROUTES.ADD_JOB} component={AddJob} />
        <Route exact path={ROUTES.SEARCH} component={Search} />
        <Route exact path={ROUTES.JOBPAGE} component={JobPage} />
        <Route exact path={ROUTES.PROFILE} component={UserProfile} />
        <Route exact path={ROUTES.UPDATE_PROFILE} component={TestProfile} />
        <Route exact path={ROUTES.RECRUITER_PAGE} component={ServicesAuth} />
        <Route exact path={ROUTES.ABOUT} component={About} />
        <Route exact path={ROUTES.ACCOUNT} component={Account} />
        <Route
          exact
          path={ROUTES.RECRUITER_JOBPAGE}
          component={RecruiterJobPage}
        />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default AuthApp;
