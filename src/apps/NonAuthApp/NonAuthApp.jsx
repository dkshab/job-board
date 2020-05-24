import React from "react";
import { Route } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import NavBarNonAuth from "./staticComponents/NavBarNonAuth";
import Footer from "../../sharedComponents/Footer";
import Home from "../../sharedComponents/Home";
import About from "../../sharedComponents/About";
import SignInAndSignUp from "./interaction/candidates/SignInAndSignUp";
import ServicesNonAuth from "./interaction/recruiters/ServicesNonAuth";
import SignInRecruiters from "./interaction/recruiters/SignInRecruiters";
import SignUpRecruiters from "./interaction/recruiters/SignUpRecruiters";

const AuthApp = () => {
  return (
    <div className="NonAuthApp">
      <div className="wrapper">
        <NavBarNonAuth />
        <main className="main">
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.SIGNIN} component={SignInAndSignUp} />
          <Route exact path={ROUTES.ABOUT} component={About} />
          <Route
            exact
            path={ROUTES.RECRUITER_PAGE_NON_AUTH}
            component={ServicesNonAuth}
          />
          <Route
            exact
            path={ROUTES.RECRUITER_SIGNIN}
            component={SignInRecruiters}
          />
          <Route
            exact
            path={ROUTES.RECRUITER_SIGNUP}
            component={SignUpRecruiters}
          />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default AuthApp;
